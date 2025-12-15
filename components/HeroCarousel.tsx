import React, { useEffect, useRef } from 'react';

export const HeroCarousel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1; // Device Pixel Ratio

    // Configuration - Tuned for a mature, elegant look
    const config = {
      bgGradientStart: '#0a192f', // Navy 900
      bgGradientEnd: '#112240',   // Navy 800
      particleBaseColor: 'rgba(255, 255, 255, 0.4)',
      particleHighlightColor: 'rgba(56, 189, 248, 1)', // Sky 500
      lineColor: 'rgba(56, 189, 248, 0.12)',
      particleSpeed: 0.15, // Slow, dignified movement
      connectionDistance: 130,
      mouseInteractionDistance: 180,
      baseRadius: 1.2,
      particleDensity: 9000 // Higher number = fewer particles (pixels per particle)
    };

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      angle: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Random direction, consistent slow speed
        const dir = Math.random() * Math.PI * 2;
        this.vx = Math.cos(dir) * config.particleSpeed;
        this.vy = Math.sin(dir) * config.particleSpeed;
        this.size = Math.random() * 1.5 + config.baseRadius;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        // Organic Drift
        this.x += this.vx;
        this.y += this.vy;
        
        // Subtle oscillation to feel "alive"
        this.angle += 0.01;
        this.x += Math.sin(this.angle) * 0.05;
        this.y += Math.cos(this.angle) * 0.05;

        // Wrap around screen (Infinite canvas effect)
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.particleBaseColor;
        ctx.fill();
      }
    }

    const init = () => {
      // High DPI Scaling logic for crispness on modern phones/laptops
      dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Scale context to match DPR
      ctx.scale(dpr, dpr);
      
      // CSS size must remain same
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const particleCount = Math.floor((width * height) / config.particleDensity);
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      // Draw Deep Navy Background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, config.bgGradientStart);
      gradient.addColorStop(1, config.bgGradientEnd);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => p.update());

      // Optimization: Batch drawing operations
      // Draw Connections first (behind particles)
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Mouse Interaction (Connect to cursor)
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < config.mouseInteractionDistance) {
          ctx.beginPath();
          const opacity = (1 - distMouse / config.mouseInteractionDistance) * 0.8;
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`; // Stronger Sky Blue near mouse
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Enlarge particle slightly when connected to mouse
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = config.particleHighlightColor;
          ctx.fill();
        } else {
          // Draw standard particle
          p1.draw();
        }

        // Particle-to-Particle Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < config.connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - (dist / config.connectionDistance);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.15})`; // Very subtle connection
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event Handlers
    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    const handleLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('touchend', handleLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('touchend', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-64 md:h-96 mb-24 relative overflow-hidden shadow-inner rounded-sm"
      role="img" 
      aria-label="Abstract interactive network animation representing connection and digital architecture."
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full cursor-crosshair touch-none"
      />
      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-navy-900 via-sky-500 to-navy-900 opacity-60" />
    </div>
  );
};