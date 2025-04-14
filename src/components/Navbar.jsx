import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5C4033] text-[#F0E5D8] p-4 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anasuya Roy</h1>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#5C4033] p-4">
          <div className="flex flex-col gap-4">
            <a href="#home" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}