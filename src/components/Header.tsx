import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">BMT MOTORS</h1>
              <p className="text-xs text-gray-300">Spécialiste Moto</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              À Propos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-white hover:text-red-500 transition-colors duration-200 text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="text-white hover:text-red-500 transition-colors duration-200 text-left"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-red-500 transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="text-white hover:text-red-500 transition-colors duration-200 text-left"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
