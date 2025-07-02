import React from 'react'


/*
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
  }*/
// This component displays a gallery of images showcasing the bakery's creations.  

import cake1 from "../assets/images/IMG-20250523-WA0070.jpg";
import cake2 from "../assets/images/PXL_20250628_200110446.PORTRAIT.webp";
import cake3 from "../assets/images/PXL_20250608_065212836.PORTRAIT.webp";
import cake4 from "../assets/images/PXL_20250628_001736684.PORTRAIT.webp";
import cake5 from "../assets/images/Image_1747847349151.webp";
import cake6 from "../assets/images/IMG-20250518-WA0005.jpg";
import cake7 from "../assets/images/IMG-20250618-WA0026.jpg";
import cake8 from "../assets/images/1747575620217.webp";

const galleryImages = [
  { src: cake1, alt: "Elegant Floral Cake", caption: "Elegant Floral Cake" },
  { src: cake2, alt: "Assorted Cupcakes", caption: "Assorted Cupcakes" },
  { src: cake3, alt: "Birthday Cake", caption: "Custom Birthday Cake" },
  { src: cake4, alt: "Strawberry Cake", caption: "Strawberry Delight" },
  { src: cake5, alt: "Dessert Table", caption: "Event Dessert Table" },
  { src: cake6, alt: "Pastry Assortment", caption: "Pastry Assortment" },
  { src: cake7, alt: "Dessert Table", caption: "Event Dessert Table" },
  { src: cake8, alt: "Pastry Assortment", caption: "Pastry Assortment" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-10">
          Our Work
        </h2>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading='lazy'
                className="w-full h-48 object-cover"
              />
              <p className="text-sm text-chocolate p-2 bg-white text-center font-medium">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
