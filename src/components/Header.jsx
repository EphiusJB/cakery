import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (optional)

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
        {/* Logo */}
        <a href="/" className="hover:text-orangeAccent transition">
        <h1 className="text-2xl font-bold">Mika’s Cakery</h1>
      </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">{navLinks}</nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-chocolate px-4 pb-4 space-y-2 text-lg flex flex-col">
          {navLinks}
        </div>
      )}
    </header>
  );
}
