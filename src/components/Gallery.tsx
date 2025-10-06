import React from 'react';

const Gallery = () => {
  return (
    <section id="galerie" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre <span className="text-red-600">Galerie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Les photos arrivent prochainement 📸  
            Suivez-nous sur Instagram pour ne rien manquer !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.instagram.com/bmt.motors80?igsh=MWl1YmFjY213b2pxbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              🔗 Suivez-nous sur Instagram
            </a>

            <button
              disabled
              className="border-2 border-gray-400 text-gray-400 px-6 py-3 rounded-lg cursor-not-allowed"
            >
              📷 Voir les photos (bientôt disponible)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
