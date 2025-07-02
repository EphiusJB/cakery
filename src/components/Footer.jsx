import React from 'react'

/*
export default function Footer() {
    return (
      <footer id='contact' className="bg-chocolate text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand *}
          <div>
            <h3 className="text-2xl font-bold mb-2">Mika’s Cakery</h3>
            <p className="text-sm text-white/80">
              Made with love, baked to perfection.
            </p>
          </div>
  
          {/* Contact Info *}
          <div>
            <h4 className="font-semibold text-lg mb-2">Contact</h4>
            <p>Email: <a href="mailto:hello@mikasbakery.com" className="underline">hello@mikasbakery.com</a></p>
            <p>Phone: +260 97 000 0000</p>
          </div>
  
          {/* Socials *}
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
  */

  import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react"; // icons

export default function Footer() {
  return (
    <footer className="bg-chocolate text-white py-10 px-6">
      <div id='contact' className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-sm">
        {/* Brand/Logo */}
        <div>
          <h2 className="text-xl font-bold mb-2">Mika’s Cakery</h2>
          <p className="text-white/70">
            Sweet moments, freshly baked. Visit us or order online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Menu</Link></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#reviews" className="hover:underline">Reviews</a></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:mikas@example.com" className="hover:underline">
                mikas@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="mailto:mikas@example.com" className="hover:underline">
                +260 972928177
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} />
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} />
              <a href="#" className="hover:underline">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10 text-xs text-white/60">
        &copy; {new Date().getFullYear()} Mika’s Cakery. All rights reserved.
      </div>
    </footer>
  );
}
