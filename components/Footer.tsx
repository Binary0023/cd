import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-taxi-yellow rounded-lg flex items-center justify-center text-taxi-dark font-bold text-xl">
                TM
              </div>
              <span className="font-bold text-2xl uppercase tracking-tighter">Taxi<span className="text-taxi-yellow">Martigny</span></span>
            </div>
            <p className="text-gray-500 mb-6 font-medium text-sm">
              A Global Transfers Group Company
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-taxi-yellow hover:text-taxi-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-taxi-yellow hover:text-taxi-dark transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-extrabold text-lg uppercase mb-6">Discover</h4>
            <ul className="space-y-4 text-gray-600 font-medium border-b md:border-none border-gray-100 pb-6 md:pb-0">
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Transfers</a></li>
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Destinations</a></li>
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Geneva Airport</a></li>
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Transport Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-lg uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-600 font-medium border-b md:border-none border-gray-100 pb-6 md:pb-0">
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">About us</a></li>
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Contact us</a></li>
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Help & Support</a></li>
              <li><a href="#" className="hover:text-taxi-yellow transition-colors underline decoration-taxi-yellow/30 decoration-2 underline-offset-4">Blog</a></li>
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="font-extrabold text-lg uppercase mb-6">Book</h4>
            <div className="space-y-4">
              <button className="w-full bg-taxi-yellow text-taxi-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors uppercase shadow-sm">
                Book Now
              </button>
              <button className="w-full bg-white border-2 border-gray-200 text-taxi-dark font-bold py-3 rounded-lg hover:border-taxi-yellow hover:text-taxi-yellow transition-colors uppercase">
                Manage Booking
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
          <p>Alpine Fleet 2025 (Taxi Martigny Version)</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;