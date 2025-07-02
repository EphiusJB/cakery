import React from 'react'

const galleryImages = [
    {
      src: "https://source.unsplash.com/400x400/?cake,chocolate",
      alt: "Chocolate Celebration Cake",
    },
    {
      src: "https://source.unsplash.com/400x400/?cupcake,redvelvet",
      alt: "Red Velvet Cupcake",
    },
    {
      src: "https://source.unsplash.com/400x400/?muffin",
      alt: "Blueberry Muffin",
    },
  ];
  
  export default function Gallery() {
    return (
      <section id="gallery" className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-10">
            Our Creations
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="bg-chocolate text-white p-2 text-sm">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
// This component displays a gallery of images showcasing the bakery's creations.  