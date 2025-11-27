import React from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  { 
    name: 'Geneva Taxi – Verbier', 
    img: 'https://picsum.photos/id/1018/600/400' 
  },
  { 
    name: 'Geneva Taxi – Martigny', 
    img: 'https://picsum.photos/id/1036/600/400' 
  },
  { 
    name: 'Taxi Martigny – Verbier', 
    img: 'https://picsum.photos/id/1015/600/400' 
  }
];

const Destinations: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-taxi-dark uppercase tracking-tight">Destinations</h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-taxi-yellow font-bold text-lg hover:text-taxi-dark transition-colors">
            Learn more <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-extrabold text-white mb-4 drop-shadow-md">{dest.name}</h3>
                <button className="bg-taxi-yellow text-taxi-dark px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-taxi-yellow font-bold text-lg">
            Learn more <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;