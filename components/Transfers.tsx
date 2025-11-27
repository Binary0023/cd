import React from 'react';
import { ArrowRight, Bus, Car } from 'lucide-react';

const Transfers: React.FC = () => {
  return (
    <section className="py-20 bg-[#F0F5F7]" id="transfers">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">Transfers</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-taxi-dark uppercase">Choose Your Ride</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shared Transfers */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg group">
            <div className="md:w-5/12 h-64 md:h-auto overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=2670&auto=format&fit=crop" 
                alt="Shared Transfers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
            <div className="md:w-7/12 p-8 flex flex-col justify-center relative">
              <h3 className="text-2xl font-extrabold text-taxi-dark mb-4 uppercase">Shared Transfers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium">
                The best value for money option! We offer shared transfers to popular ski resorts in the Alps. High Frequency, Simple, and Easy!
              </p>
              <div className="mt-auto flex items-center justify-between">
                <a href="#" className="text-[#ED2559] font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm">
                  Shared Transfers <ArrowRight size={18} />
                </a>
                <Bus className="text-[#0099cc]" size={40} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Private Transfers */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg group">
            <div className="md:w-5/12 h-64 md:h-auto overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?q=80&w=2621&auto=format&fit=crop" 
                alt="Private Transfers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
            <div className="md:w-7/12 p-8 flex flex-col justify-center relative">
              <h3 className="text-2xl font-extrabold text-taxi-dark mb-4 uppercase">Private Transfers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium">
                The most convenient way to reach your ski resort. Choose from a standard, or luxury premium transfer and start your vacation in style!
              </p>
              <div className="mt-auto flex items-center justify-between">
                <a href="#" className="text-[#ED2559] font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm">
                  Private Transfers <ArrowRight size={18} />
                </a>
                <Car className="text-[#0099cc]" size={40} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfers;