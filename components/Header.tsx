import React, { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white text-taxi-dark border-b-4 border-taxi-yellow shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-taxi-yellow rounded-lg flex items-center justify-center text-taxi-dark font-bold text-xl">
              TM
            </div>
            <span className="font-bold text-2xl tracking-tighter uppercase">Taxi<span className="text-taxi-yellow">Martigny</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="hover:text-taxi-yellow transition-colors font-bold uppercase text-sm">Destinations</a>
            <a href="#transfers" className="hover:text-taxi-yellow transition-colors font-bold uppercase text-sm">Transfers</a>
            <a href="#services" className="hover:text-taxi-yellow transition-colors font-bold uppercase text-sm">Services</a>
            <a href="#contact" className="hover:text-taxi-yellow transition-colors font-bold uppercase text-sm">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+41793953030" className="flex items-center gap-2 hover:text-taxi-yellow transition-colors text-taxi-dark">
              <Phone size={18} fill="currentColor" />
              <span className="font-extrabold text-lg">+41 79 395 30 30</span>
            </a>
            <button className="bg-taxi-yellow text-taxi-dark px-6 py-2.5 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 uppercase text-sm shadow-md">
              <User size={18} />
              My Booking
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-taxi-dark hover:text-taxi-yellow">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#destinations" className="block py-3 text-lg font-bold border-b border-gray-100 hover:text-taxi-yellow text-taxi-dark">Destinations</a>
            <a href="#transfers" className="block py-3 text-lg font-bold border-b border-gray-100 hover:text-taxi-yellow text-taxi-dark">Transfers</a>
            <a href="#services" className="block py-3 text-lg font-bold border-b border-gray-100 hover:text-taxi-yellow text-taxi-dark">Services</a>
            <a href="#contact" className="block py-3 text-lg font-bold border-b border-gray-100 hover:text-taxi-yellow text-taxi-dark">Contact</a>
            <div className="pt-4">
              <button className="w-full bg-taxi-yellow text-taxi-dark py-3 rounded-lg font-bold uppercase">
                My Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;