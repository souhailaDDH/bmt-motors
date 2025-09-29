import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-red-900/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-white ml-2">Mécanicien Passionné</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Votre Moto Entre
            <span className="block text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Bonnes Mains
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Réparation, entretien et customisation de motos par un passionné de mécanique. 
            Un service de qualité pour votre moto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Découvrir nos Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Nous Contacter
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">🔧</div>
              <div className="text-gray-300">Toutes Marques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">⚡</div>
              <div className="text-gray-300">Diagnostic Précis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">❤️</div>
              <div className="text-gray-300">Travail Soigné</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
