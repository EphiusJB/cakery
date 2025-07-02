import React from 'react'
import { Link } from 'react-router-dom';

/*
export default function Hero() {
    return (
      <section
        id="hero"
        className="bg-strawberry text-chocolate text-center py-20 px-4 relative"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Sweet Moments, Baked to Perfection
          </h2>
          <p className="text-lg md:text-xl text-chocolate/80 mb-6">
            Cakes, cupcakes, and treats made with love — just for you.
          </p>
          <Link
  to="/products"
  className="mt-6 inline-block bg-orangeAccent text-white px-6 py-3 rounded-lg hover:bg-orangeAccent/90 transition"
>
  View Our Menu!
</Link>
        </div>
  
        {/* 🍫 Chocolate Drip (CSS-only) *}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0V27.35c47.69,22,98.43,36.91,150,43.23C338,91.67,434,5.34,600,15.69s262,91.34,390,70.2c60.86-10.26,119.39-30.34,210-60V0Z"
              fill="#4B2C20"
            />
          </svg>
        </div>
      </section>
    );
  }
  */
 import banner from '../assets/HomemadeBliss_StopMotionCover_LR-1.webp';

  export default function Hero() {
    return (
      <section
        className="h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            `url(${banner})`,
        }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Enjoy every Moment with our baked goods!
        </h1>
        <p className="text-cream text-lg max-w-xl drop-shadow-md mb-6">
          Indulge in our handcrafted cakes, pastries, and treats made with love
          daily.
        </p>
        <Link
  to="/products"
  className="mt-6 inline-block bg-orangeAccent text-white px-6 py-3 rounded-lg hover:bg-orangeAccent/90 transition"
>
  View Our Menu!
</Link>
      </section>
    );
  }
  
