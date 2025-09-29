import React from 'react';
import { Award, Clock, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À Propos de <span className="text-red-600">BMT MOTORS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionné de mécanique depuis mon plus jeune âge, je mets mon expertise 
              au service de votre passion pour la moto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg"
                alt="Mécanicien au travail"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Une Passion Devenue Métier
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Passionné de mécanique moto depuis toujours, je répare et entretiens 
                tous types de motos, des sportives aux customs, en passant par les 
                motos de collection.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Mon atelier est équipé des derniers outils de diagnostic et je me forme 
                régulièrement aux nouvelles technologies pour vous offrir un service 
                de qualité supérieure.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Toutes Marques
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Diagnostic Électronique
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Pièces Originales
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Passion</h4>
              <p className="text-gray-600">
                Un amour authentique pour la mécanique moto
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Rapidité</h4>
              <p className="text-gray-600">
                Intervention rapide et diagnostic précis
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Qualité</h4>
              <p className="text-gray-600">
                Un travail fait avec amour et attention aux détails
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Confiance</h4>
              <p className="text-gray-600">
                Des clients satisfaits qui nous font confiance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
