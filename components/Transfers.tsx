import React from 'react';
import { ArrowRight, Bus, Car } from 'lucide-react';

const Transfers: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="transfers">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-2">Transfers</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-taxi-dark uppercase">Choose Your Ride</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shared Transfers */}
          <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-lg group">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
               <img 
                src="https://picsum.photos/id/111/600/800" 
                alt="Shared Transfers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-taxi-dark/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-taxi-dark mb-4 uppercase">Shared Transfers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The best value for money option! We offer shared transfers to popular ski resorts in the Alps. High Frequency, Simple, and Easy!
              </p>
              <div className="mt-auto flex items-center justify-between">
                <a href="#" className="text-taxi-yellow font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Shared Transfers <ArrowRight size={20} />
                </a>
                <Bus className="text-taxi-dark opacity-20" size={48} />
              </div>
            </div>
          </div>

          {/* Private Transfers */}
          <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-lg group">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
               <img 
                src="https://picsum.photos/id/133/600/800" 
                alt="Private Transfers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-taxi-dark/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-taxi-dark mb-4 uppercase">Private Transfers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The most convenient way to reach your ski resort. Choose from a standard, or luxury premium transfer and start your vacation in style!
              </p>
              <div className="mt-auto flex items-center justify-between">
                <a href="#" className="text-taxi-yellow font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Private Transfers <ArrowRight size={20} />
                </a>
                <Car className="text-taxi-dark opacity-20" size={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfers;