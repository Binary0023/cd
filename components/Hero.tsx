import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRightLeft } from 'lucide-react';

const Hero: React.FC = () => {
  const [tripType, setTripType] = useState('return');
  const [transferType, setTransferType] = useState('shared');

  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2826&auto=format&fit=crop" 
          alt="Ski Resort" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient similar to Alpine Fleet */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg uppercase italic">
            Taxi Service <span className="text-taxi-yellow">Martigny</span>
          </h1>
          <p className="text-white text-xl font-medium drop-shadow-md">
            Professional transfers to Verbier, Geneva & beyond.
          </p>
        </div>

        {/* Booking Widget Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full mx-auto relative -mb-32 md:-mb-48 border-t-8 border-taxi-yellow">
          {/* Top Bar - Options */}
          <div className="bg-[#0099cc] text-white p-4 flex flex-col md:flex-row gap-6 md:items-center border-b border-[#0088b5]">
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group select-none">
                <div className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center ${tripType === 'return' ? 'border-white' : 'border-white/50'}`}>
                  {tripType === 'return' && <div className="w-2.5 h-2.5 rounded-full bg-[#0099cc]" />}
                </div>
                <input type="radio" name="tripType" className="hidden" checked={tripType === 'return'} onChange={() => setTripType('return')} />
                <span className={`font-bold text-sm uppercase ${tripType === 'return' ? 'text-white' : 'text-white/80'}`}>Return</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group select-none">
                <div className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center ${tripType === 'oneway' ? 'border-white' : 'border-white/50'}`}>
                  {tripType === 'oneway' && <div className="w-2.5 h-2.5 rounded-full bg-[#0099cc]" />}
                </div>
                <input type="radio" name="tripType" className="hidden" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
                <span className={`font-bold text-sm uppercase ${tripType === 'oneway' ? 'text-white' : 'text-white/80'}`}>One way</span>
              </label>
            </div>

            <div className="w-px h-6 bg-white/30 hidden md:block"></div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group select-none">
                <div className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center ${transferType === 'shared' ? 'border-white' : 'border-white/50'}`}>
                  {transferType === 'shared' && <div className="w-2.5 h-2.5 rounded-full bg-[#0099cc]" />}
                </div>
                <input type="radio" name="transferType" className="hidden" checked={transferType === 'shared'} onChange={() => setTransferType('shared')} />
                <span className={`font-bold text-sm uppercase ${transferType === 'shared' ? 'text-white' : 'text-white/80'}`}>Shared Transfer</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group select-none">
                <div className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center ${transferType === 'private' ? 'border-white' : 'border-white/50'}`}>
                  {transferType === 'private' && <div className="w-2.5 h-2.5 rounded-full bg-[#0099cc]" />}
                </div>
                <input type="radio" name="transferType" className="hidden" checked={transferType === 'private'} onChange={() => setTransferType('private')} />
                <span className={`font-bold text-sm uppercase ${transferType === 'private' ? 'text-white' : 'text-white/80'}`}>Private Transfer</span>
              </label>
            </div>
          </div>

          {/* Main Form Fields */}
          <form className="p-6 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* From */}
            <div className="md:col-span-3">
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-taxi-yellow transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="From (Airport, Resort...)" 
                  className="w-full bg-[#F0F5F7] p-4 pl-12 rounded-lg outline-none font-semibold text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-taxi-yellow transition-all border border-transparent focus:border-taxi-yellow h-14"
                />
              </div>
            </div>

            {/* Swap Icon */}
            <div className="hidden md:flex md:col-span-1 justify-center pb-4">
               <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-taxi-yellow transition-colors">
                 <ArrowRightLeft size={20} />
               </button>
            </div>

            {/* To */}
            <div className="md:col-span-3">
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-taxi-yellow transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="To (Resort, Airport...)" 
                  className="w-full bg-[#F0F5F7] p-4 pl-12 rounded-lg outline-none font-semibold text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-taxi-yellow transition-all border border-transparent focus:border-taxi-yellow h-14"
                />
              </div>
            </div>

            {/* Dates & Passengers Row */}
            <div className="md:col-span-3 grid grid-cols-2 gap-2">
               <div className="relative">
                  <input type="text" placeholder="Outbound" onFocus={(e) => e.target.type='date'} className="w-full bg-[#F0F5F7] p-4 px-4 rounded-lg outline-none font-semibold text-sm text-gray-800 focus:ring-2 focus:ring-taxi-yellow h-14" />
               </div>
               {tripType === 'return' ? (
                 <div className="relative">
                    <input type="text" placeholder="Return" onFocus={(e) => e.target.type='date'} className="w-full bg-[#F0F5F7] p-4 px-4 rounded-lg outline-none font-semibold text-sm text-gray-800 focus:ring-2 focus:ring-taxi-yellow h-14" />
                 </div>
               ) : (
                 <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full bg-[#F0F5F7] p-4 pl-10 rounded-lg outline-none font-semibold text-sm text-gray-800 appearance-none focus:ring-2 focus:ring-taxi-yellow h-14">
                      <option>1 Pas</option>
                      <option>2 Pas</option>
                      <option>3 Pas</option>
                      <option>4 Pas</option>
                      <option>5+ Pas</option>
                    </select>
                 </div>
               )}
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button type="button" className="w-full bg-[#ED2559] hover:bg-[#d61c4b] text-white font-extrabold text-lg h-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 uppercase">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;