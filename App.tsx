import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

          <footer className="mt-24 py-8 px-4 md:px-8 lg:px-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 w-full max-w-[1920px] mx-auto">
            <p>&copy; {new Date().getFullYear()} Temitope Ezekiel Ajibola.</p>
            <p className="mt-2 md:mt-0">Generational Architect.</p>
          </footer>

        </main>
      </div>
    </Router>
  );
};

export default App;