import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HeroCarousel } from './components/HeroCarousel';
import { Section } from './components/Section';
import { ArrowUpRight, GraduationCap, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-4 md:p-8 lg:p-12">
      {/* Background Decorative Element - Moved outside main to prevent overflow:hidden issues with sticky nav */}
      <div className="fixed top-0 right-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-bl-full opacity-60" />
      </div>

      {/* Main Card Container */}
      <main id="main-content" className="w-full max-w-5xl bg-white shadow-2xl shadow-gray-200/50 min-h-[90vh] p-6 md:p-16 lg:p-20 relative">
        
        <Navigation />
        
        <Hero />

        {/* Large Visual Element (Carousel) */}
        <HeroCarousel />

        <Section id="about" title="About">
          <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
            <p>
              <strong className="text-navy-900 font-semibold">Temitope Ezekiel Ajibola</strong> is a generational architect shaping a future where spiritual intelligence informs human innovation and experience, enabling the rise of people, systems, and nations that endure.
            </p>
            <p>
              Across ministry, research, and enterprise, Temitope carries a singular mandate: <span className="italic font-serif text-navy-900">build what endures</span>.
            </p>
          </div>
        </Section>

        <Section id="research" title="Research & Industry">
          <div className="grid grid-cols-1 gap-12">
            <div className="space-y-4">
               <h4 className="text-xl font-serif text-navy-900">Academic Frontier</h4>
               <p className="text-gray-600 leading-relaxed">
                 A PhD researcher in AI and blockchain security, his academic work includes published research papers and pending patents advancing resilient, intelligent systems for the emerging digital economy.
               </p>
            </div>
            
            <div className="space-y-4">
               <h4 className="text-xl font-serif text-navy-900">Industry Leadership</h4>
               <p className="text-gray-600 leading-relaxed">
                 In industry, Temitope builds intelligent architectures and next-generation automation frameworks at the frontier of artificial intelligence, security, and organizational transformation. His rare ability to move fluently between revelation and research, ministry and industry, defines his evolving impact across communities and institutions.
               </p>
            </div>
          </div>
        </Section>

        <Section id="ministry" title="Ministry & Impact">
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              He is the Founder of <strong className="text-navy-900">The Davidic Tribe</strong> and <strong className="text-navy-900">10 Hours Houston</strong>, a prayer movement contending for the souls of the younger generation and establishing them in God’s purposes—so they can influence systems, steward authority, and shape culture with boldness and clarity.
            </p>

            <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-sky-500">
              <h4 className="font-bold text-navy-900 mb-4 uppercase text-sm tracking-wider">Recognition</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span>HBCUniverse 30 Under 30</span>
                </li>
                <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span>Rising Star, Baltimore City Chamber of Commerce</span>
                </li>
                <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span>Featured on <em>God Bless Bitcoin</em> alongside Mark Cuban, Robert Kiyosaki, and Michael Saylor.</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Connect">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="https://www.linkedin.com/in/temitope-ajibola" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                    <Linkedin className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                    <span className="ml-3 font-medium text-navy-900">LinkedIn</span>
                    <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </a>
                <a href="https://x.com/TEAJIBOLA" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                    <Twitter className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                    <span className="ml-3 font-medium text-navy-900">Twitter / X</span>
                    <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </a>
                <a href="https://www.instagram.com/teajibola/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                    <Instagram className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                    <span className="ml-3 font-medium text-navy-900">Instagram</span>
                    <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </a>
                <a href="https://scholar.google.com/citations?user=3IR2-BcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                    <GraduationCap className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                    <span className="ml-3 font-medium text-navy-900">Google Scholar</span>
                    <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </a>
                <a href="mailto:temitopeajibola7@yahoo.com" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 sm:col-span-2 md:col-span-1">
                    <Mail className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                    <span className="ml-3 font-medium text-navy-900">Email</span>
                    <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </a>
            </div>
        </Section>

        <footer className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Temitope Ezekiel Ajibola.</p>
            <p className="mt-2 md:mt-0">Generational Architect.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;