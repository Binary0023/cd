import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-taxi-dark mb-4">Our Transfer Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Choose the travel option that best suits your needs. Whether you prefer a cost-effective shared ride or the privacy of a dedicated vehicle.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop" 
              alt="Private Luxury Taxi" 
              className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <h3 className="text-3xl font-bold text-white mb-2">Private Taxi</h3>
              <p className="text-gray-200 mb-6 max-w-md">The most convenient way to reach your ski resort. Door-to-door service for individuals, families, and groups.</p>
              <button className="bg-taxi-yellow text-taxi-dark px-6 py-3 rounded-lg font-bold flex items-center gap-2 group-hover:bg-white transition-colors">
                Book Private <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop" 
              alt="Shared Minivan Transfer" 
              className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <h3 className="text-3xl font-bold text-white mb-2">Minivan Groups</h3>
              <p className="text-gray-200 mb-6 max-w-md">Perfect for larger groups or budget-conscious travellers. Regular shuttles from Martigny train station.</p>
              <button className="bg-white text-taxi-dark px-6 py-3 rounded-lg font-bold flex items-center gap-2 group-hover:bg-taxi-yellow transition-colors">
                Book Group <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;