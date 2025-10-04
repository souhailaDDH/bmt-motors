import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nous <span className="text-red-500">Contacter</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Retrouvez toutes mes informations de contact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Informations Pratiques</h3>
              
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Adresse</h4>
                    <p className="text-gray-300">
                      315 Route de Rouen<br />
                      80000 Amiens, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Téléphone</h4>
                    <p className="text-gray-300">07 65 64 60 88</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">bmt.motors80@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-red-600 rounded-lg text-center">
                <h4 className="text-lg font-bold text-white mb-2">🏍️ Votre Moto en Sécurité</h4>
                <p className="text-gray-100">
                  Confiez votre moto à un passionné qui prendra soin d'elle 
                  comme si c'était la sienne.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
