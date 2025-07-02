import React from 'react'
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
      "Cakes",
      "Doughnuts",
      "Cupcakes",
      "Muffins",
      "Chocolate Treats",
    ];
  
    return (
      <section id="services" className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-10">
            Our Sweet Services
          </h2>
  
          <div className="bg-chocolate text-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <ul className="text-left space-y-3 text-lg">
              {services.map((item, i) => (
                <li key={i} className="before:content-['🍩'] before:mr-2">
                  {item}
                </li>
              ))}
            </ul>
  
            <a
  href="#contact"
  className="mt-6 inline-block bg-orangeAccent text-white px-6 py-3 rounded-lg hover:bg-orangeAccent/90 transition"
>
  Contact us for More!
</a>
          </div>
        </div>

      </section>
    );
  }
  