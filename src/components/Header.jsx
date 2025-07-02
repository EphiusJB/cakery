import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (optional)

/*
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <a href="/#services" className="hover:text-orangeAccent transition" onClick={toggleMenu}>
        Services
      </a>
      <a href="/#gallery" className="hover:text-orangeAccent transition" onClick={toggleMenu}>
        Gallery
      </a>
      <a href="#reviews" className="hover:text-orangeAccent transition" onClick={toggleMenu}>
        Reviews
      </a>
      <a href="#contact" className="hover:text-orangeAccent transition" onClick={toggleMenu}>
        Contact
      </a>
    </>
  );

  return (
    <header className="bg-chocolate text-white sticky top-0 z-50 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo *}
        <a href="/" className="hover:text-orangeAccent transition">
        <h1 className="text-2xl font-bold">Mika’s Cakery</h1>
      </a>

        {/* Desktop Nav *}
        <nav className="hidden md:flex space-x-6 text-lg">{navLinks}</nav>

        {/* Mobile Toggle *}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu *}
      {isOpen && (
        <div className="md:hidden bg-chocolate px-4 pb-4 space-y-2 text-lg flex flex-col">
          {navLinks}
        </div>
      )}
    </header>
  );
}*/


// V2

import { Link } from "react-router-dom";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/products" },
    { label: "About", to: "#about" },
    { label: "Gallery", to: "#gallery" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <header className="bg-cream text-chocolate shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Mika’s Cakery
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.to} href={link.to} className="hover:text-orangeAccent">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/products"
          className="hidden md:inline bg-orangeAccent text-white px-4 py-2 rounded hover:bg-orangeAccent/90 text-sm"
        >
          Order Now
        </Link>

        {/* Hamburger for Mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-cream px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={closeMenu}
              className="block text-sm font-medium hover:text-orangeAccent"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/products"
            onClick={closeMenu}
            className="block text-sm bg-orangeAccent text-white text-center py-2 rounded hover:bg-orangeAccent/90"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
