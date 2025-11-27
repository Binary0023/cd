import React, { useState } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-taxi-dark text-white border-b-4 border-taxi-yellow">
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
            <a href="#" className="hover:text-taxi-yellow transition-colors font-medium">Destinations</a>
            <a href="#" className="hover:text-taxi-yellow transition-colors font-medium">Transfers</a>
            <a href="#" className="hover:text-taxi-yellow transition-colors font-medium">Airports</a>
            <a href="#" className="hover:text-taxi-yellow transition-colors font-medium">About Us</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+41223066010" className="flex items-center gap-2 hover:text-taxi-yellow transition-colors">
              <Phone size={18} />
              <span className="font-semibold">+41 79 123 45 67</span>
            </a>
            <button className="bg-taxi-yellow text-taxi-dark px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300 flex items-center gap-2">
              <User size={18} />
              My Booking
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-taxi-yellow">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-taxi-yellow">Destinations</a>
            <a href="#" className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-taxi-yellow">Transfers</a>
            <a href="#" className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-taxi-yellow">Airports</a>
            <a href="#" className="block py-3 text-lg font-medium border-b border-gray-800 hover:text-taxi-yellow">Contact</a>
            <div className="pt-4">
              <button className="w-full bg-taxi-yellow text-taxi-dark py-3 rounded-lg font-bold">
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