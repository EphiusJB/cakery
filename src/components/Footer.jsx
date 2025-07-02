import React from 'react'

export default function Footer() {
    return (
      <footer id='contact' className="bg-chocolate text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Mika’s Cakery</h3>
            <p className="text-sm text-white/80">
              Made with love, baked to perfection.
            </p>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Contact</h4>
            <p>Email: <a href="mailto:hello@mikasbakery.com" className="underline">hello@mikasbakery.com</a></p>
            <p>Phone: +260 97 000 0000</p>
          </div>
  
          {/* Socials */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-orangeAccent transition">Facebook</a>
              <a href="#" className="hover:text-orangeAccent transition">Instagram</a>
            </div>
          </div>
        </div>
  
        <div className="text-center text-sm text-white/60 mt-10">
          &copy; {new Date().getFullYear()} Mika’s Cakery. All rights reserved.
        </div>
      </footer>
    );
  }
  