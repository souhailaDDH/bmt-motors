import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg",
      alt: "Ducati sportive rouge",
      category: "Réparation"
    },
    {
      src: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
      alt: "Ducati Monster",
      category: "Réparation"
    },
    {
      src: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
      alt: "Ducati Panigale",
      category: "Réparation"
    },
    {
      src: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg",
      alt: "Ducati Scrambler",
      category: "Entretien"
    },
    {
      src: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
      alt: "Ducati Multistrada",
      category: "Entretien"
    },
    {
      src: "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg",
      alt: "Ducati en diagnostic",
      category: "Diagnostic"
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre <span className="text-red-600">Galerie</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de mes réalisations et l'ambiance de mon atelier. 
              Chaque projet est unique et réalisé avec le plus grand soin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-red-600 text-xs px-2 py-1 rounded-full mb-2 inline-block">
                      {image.category}
                    </div>
                    <h4 className="font-semibold">{image.alt}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Vous souhaitez voir plus de nos réalisations ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200">
                Voir Plus de Photos
              </button>
              <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200">
                Suivez-nous sur Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
