import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const recognitions = [
    {
        text: "HBCUniverse 30 Under 30",
        detail: "Honoring excellence and impact.",
        image: "/hbcu_real.png"
    },
    {
        text: "Rising Star",
        detail: "Baltimore City Chamber of Commerce",
        image: "/baltimore_star.png"
    },
    {
        text: "Featured on God Bless Bitcoin",
        detail: "Alongside Mark Cuban, Robert Kiyosaki, and Michael Saylor.",
        image: "/bitcoin_feature.png"
    }
];

export const RecognitionCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % recognitions.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + recognitions.length) % recognitions.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % recognitions.length);
    };

    return (
        <section className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-50 skew-x-12 opacity-50"></div>

            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <div className="flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-sky-500"></span>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900">Recognition & Accolades</h3>
                        <span className="w-12 h-[1px] bg-sky-500"></span>
                    </div>
                </div>

                <div className="relative w-full max-w-6xl mx-auto h-[500px] bg-white rounded-2xl shadow-2xl shadow-navy-100 overflow-hidden">
                    {recognitions.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row transition-all duration-700 transform ${index === currentIndex
                                ? 'opacity-100 translate-x-0'
                                : index < currentIndex
                                    ? 'opacity-0 -translate-x-full'
                                    : 'opacity-0 translate-x-full'
                                }`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group">
                                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors duration-500 z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.text}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 h-full p-8 md:p-16 flex flex-col justify-center bg-white relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>

                                <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy-900 tracking-tight leading-tight mb-6">
                                    {item.text}
                                </h4>
                                <div className="w-16 h-1 bg-sky-500 mb-6"></div>
                                <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide leading-relaxed">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Controls */}
                    <div className="absolute bottom-8 right-8 flex gap-4 z-20">
                        <button
                            onClick={prevSlide}
                            className="p-4 bg-white hover:bg-navy-900 hover:text-white text-navy-900 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl border border-gray-100"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-4 bg-white hover:bg-navy-900 hover:text-white text-navy-900 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl border border-gray-100"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                        {recognitions.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-12 bg-sky-500' : 'w-4 bg-gray-300 hover:bg-sky-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
