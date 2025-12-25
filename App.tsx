import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, GraduationCap, Mail } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Book } from './pages/Book';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-white">
        {/* Background Decorative Element */}
        <div className="fixed top-0 right-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-bl-full opacity-60" />
        </div>

        {/* Main Content Container */}
        <main id="main-content" className="w-full flex-grow relative flex flex-col">

          <Navigation />

          <div className="flex-grow w-full px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<Book />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <footer className="mt-24 py-8 px-4 md:px-8 lg:px-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 w-full max-w-[1920px] mx-auto gap-4">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/temitope-ajibola" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/TEAJIBOLA" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/teajibola/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://scholar.google.com/citations?user=3IR2-BcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                <GraduationCap size={20} />
              </a>
              <a href="mailto:temitopeajibola7@yahoo.com" className="hover:text-sky-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>&copy; {new Date().getFullYear()} Temitope Ezekiel Ajibola.</p>
              <p className="hidden md:block text-gray-300">•</p>
              <p>Generational Architect.</p>
            </div>
          </footer>

        </main>
      </div>
    </Router>
  );
};

export default App;