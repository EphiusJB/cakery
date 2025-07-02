import React from "react";
import customCake from '../assets/images/1749571582890.webp'
import goodies from '../assets/images/PXL_20250627_211445165.RAW-01.COVER.webp'
import lovely from '../assets/images/IMG-20250526-WA0048.jpg'

const features = [
    {
      title: "Custom Cakes",
      description:
        "We bake to your imagination — themed birthday cakes, wedding tiers, and more.",
      image: `${customCake}`,
    },
    {
      title: "Fresh Ingredients",
      description:
        "Everything is made daily using only the best locally sourced ingredients.",
      image:  `${goodies}`,
    },
    {
      title: "Made with Love",
      description:
        "Each bake is handcrafted with passion and care. Your satisfaction is our recipe.",
      image: `${lovely}`,
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section id="about" className="bg-white py-20 px-6 text-chocolate">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Mika’s Cakery?
          </h2>
          <p className="text-chocolate/80 mb-12 max-w-2xl mx-auto">
            At Mika’s Cakery, we blend tradition with creativity to deliver sweet
            moments in every slice. Here's what makes us special:
          </p>
  
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-cream rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="mx-auto mb-4 h-48 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-chocolate/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  