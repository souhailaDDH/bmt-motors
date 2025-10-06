import React from 'react';
import { Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            À Propos de BMT MOTORS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Spécialiste de la mécanique moto, mon expertise 
            au service de votre passion pour les deux-roues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo de l'atelier */}
          <div>
            <img
              src="https://i.imgur.com/7tejiJo.jpg" // URL directe de ton image
              alt="Atelier BMT Motors"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>

          {/* Informations et expertise */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-300">Qualité garantie</p>
            </div>

            <div className="space-y-4 text-left">
              <h3 className="text-2xl font-bold text-white">Notre Expertise</h3>
              <p className="text-gray-300">
                Bienvenue chez BMT MOTORS. 
                Passionné par les motos, je mets cette passion au service de mes clients. Je maîtrise toutes les 
                marques et tous les modèles, des motos classiques aux dernières sportives.
              </p>
              <p className="text-gray-300">
                J'utilise uniquement des pièces de qualité et des équipements de diagnostic 
                de pointe pour garantir des réparations durables et fiables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
