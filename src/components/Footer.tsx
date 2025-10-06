import React from 'react';
import { Wrench, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">BMT MOTORS</h3>
                <p className="text-sm text-gray-400">Spécialiste Moto</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              BMT MOTORS, votre mécanicien moto passionné. Réparation, 
              entretien, diagnostic et customisation avec soin et attention.
            </p>
            <div className="flex space-x-4">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@bmtmotors?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M34.77 15.94c-.87-.18-1.71-.42-2.5-.71v9.77c-.06.02-.13.05-.19.07-3.51.95-6.87-.18-9.21-3.18a8.82 8.82 0 01-1.88-5.01c0-.16.01-.31.02-.47V10.8c-.04.01-.09.02-.13.03-1.1.24-2.2.28-3.3.12v6.43c0 3.36 2.21 6.33 5.38 7.35 3.43 1.11 7.13-.2 9.23-3.03v7.02c-2.36.63-4.82.8-7.24.49-5.44-.63-9.87-5.11-10.77-10.55-.11-.63-.17-1.28-.17-1.93v-9.7h3.92v1.34c1.42-.22 2.85-.19 4.24.08v9.18c.46.12.93.2 1.4.24 1.81.15 3.57-.21 5.19-1.03V15.94z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bmt.motors80/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Rapide</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">07 65 64 60 88</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">bmt.motors80@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-400">
                  315 Route de Rouen<br />80000 Amiens
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BMT MOTORS. Souhaila Didouh. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
              Mentions Légales
            </button>
            <button className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
              Politique de Confidentialité
            </button>
            <button className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
              CGV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
