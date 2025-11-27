import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Circle, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [tripType, setTripType] = useState('return');
  const [transferType, setTransferType] = useState('shared');

  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1036/1920/1080" 
          alt="Snowy Alps" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center">
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg uppercase">
            Ski Transfers for Everyone
          </h1>
        </div>

        {/* Booking Widget Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full mx-auto relative -mb-32 md:-mb-48 border-t-8 border-taxi-yellow">
          {/* Top Bar - Options */}
          <div className="bg-taxi-dark text-white p-4 flex flex-col md:flex-row gap-6 md:items-center border-b border-gray-700">
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${tripType === 'return' ? 'border-taxi-yellow' : 'border-gray-400 group-hover:border-white'}`}>
                  {tripType === 'return' && <div className="w-2.5 h-2.5 rounded-full bg-taxi-yellow" />}
                </div>
                <input type="radio" name="tripType" className="hidden" checked={tripType === 'return'} onChange={() => setTripType('return')} />
                <span className={`font-bold ${tripType === 'return' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Return</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${tripType === 'oneway' ? 'border-taxi-yellow' : 'border-gray-400 group-hover:border-white'}`}>
                  {tripType === 'oneway' && <div className="w-2.5 h-2.5 rounded-full bg-taxi-yellow" />}
                </div>
                <input type="radio" name="tripType" className="hidden" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
                <span className={`font-bold ${tripType === 'oneway' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>One way</span>
              </label>
            </div>

            <div className="w-px h-6 bg-gray-600 hidden md:block"></div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${transferType === 'shared' ? 'border-taxi-yellow' : 'border-gray-400 group-hover:border-white'}`}>
                  {transferType === 'shared' && <div className="w-2.5 h-2.5 rounded-full bg-taxi-yellow" />}
                </div>
                <input type="radio" name="transferType" className="hidden" checked={transferType === 'shared'} onChange={() => setTransferType('shared')} />
                <span className={`font-bold ${transferType === 'shared' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Shared Transfer</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${transferType === 'private' ? 'border-taxi-yellow' : 'border-gray-400 group-hover:border-white'}`}>
                  {transferType === 'private' && <div className="w-2.5 h-2.5 rounded-full bg-taxi-yellow" />}
                </div>
                <input type="radio" name="transferType" className="hidden" checked={transferType === 'private'} onChange={() => setTransferType('private')} />
                <span className={`font-bold ${transferType === 'private' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Private Transfer</span>
              </label>
            </div>
          </div>

          {/* Main Form Fields */}
          <form className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* From */}
            <div className="md:col-span-3">
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-taxi-dark group-hover:text-taxi-yellow transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="From (Airport, Resort...)" 
                  className="w-full bg-gray-100 p-4 pl-12 rounded-lg outline-none font-semibold text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-taxi-yellow transition-all border-l-4 border-transparent focus:border-taxi-yellow"
                />
              </div>
            </div>

            {/* Swap Icon */}
            <div className="hidden md:flex md:col-span-1 justify-center pb-4">
               <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-taxi-yellow">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                 </svg>
               </button>
            </div>

            {/* To */}
            <div className="md:col-span-3">
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-taxi-yellow transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="To (Resort, Airport...)" 
                  className="w-full bg-gray-100 p-4 pl-12 rounded-lg outline-none font-semibold text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-taxi-yellow transition-all border-l-4 border-transparent focus:border-taxi-yellow"
                />
              </div>
            </div>

            {/* Dates & Passengers Row */}
            <div className="md:col-span-3 grid grid-cols-2 gap-2">
               <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Outbound" onFocus={(e) => e.target.type='date'} className="w-full bg-gray-100 p-4 pl-10 rounded-lg outline-none font-semibold text-sm text-gray-800 focus:ring-2 focus:ring-taxi-yellow" />
               </div>
               {tripType === 'return' ? (
                 <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Return" onFocus={(e) => e.target.type='date'} className="w-full bg-gray-100 p-4 pl-10 rounded-lg outline-none font-semibold text-sm text-gray-800 focus:ring-2 focus:ring-taxi-yellow" />
                 </div>
               ) : (
                 <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full bg-gray-100 p-4 pl-10 rounded-lg outline-none font-semibold text-sm text-gray-800 appearance-none focus:ring-2 focus:ring-taxi-yellow">
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
              <button type="button" className="w-full bg-taxi-yellow hover:bg-yellow-400 text-taxi-dark font-extrabold text-lg p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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