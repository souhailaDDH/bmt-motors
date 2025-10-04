import React from 'react';
import { Settings, Wrench, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Réparation Générale",
      description: "Diagnostic et réparation de tous problèmes mécaniques et électroniques.",
      features: ["Diagnostic complet", "Réparation/refection moteur, boite, coussinets", "Remplacement des courroies de distribution", "Système de freinage", "Changement de pneu", "Remplacement des joints spy de fourche et entretien de la fourche", "Kit chaine", "Entretien de hub de roue arrière pour les monobras", "Révision complète", "Jeu aux soupapes", "Montage de pièces performance pour la piste", "Vidange", "Entretien carbu avec synchronisation", "Remplacement d'embrayage", "Roulements de direction", "Diagnostic Électronique", "Maintenance préventive selon les préconisations constructeur", "Et plus encore" ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-red-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une gamme complète de services pour tous vos besoins moto, 
              du simple entretien à la réparation la plus complexe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <button className="text-red-500 hover:text-red-400 font-medium transition-colors duration-200">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin d'informations sur nos services ?
              </h3>
              <p className="text-gray-200 mb-6">
                Contactez-nous pour obtenir plus d'informations sur nos services. 
                Nous sommes là pour répondre à toutes vos questions.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
