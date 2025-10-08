import React from 'react';
import { Link } from 'react-router-dom';
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
                {/* Icône TikTok SVG */}
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
            <Link to="/mentions-legales" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
              Mentions Légales
            </Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
              Politique de Confidentialité
            </Link>
            <Link to="/cgv" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
