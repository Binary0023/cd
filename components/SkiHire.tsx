import React from 'react';

const SkiHire: React.FC = () => {
  return (
    <section className="relative py-24 bg-taxi-dark overflow-hidden">
      <img src="https://images.unsplash.com/photo-1522056615691-da7b8106c665?q=80&w=2670&auto=format&fit=crop" alt="Ski Hire" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white uppercase italic">
            60% <span className="text-taxi-yellow">OFF SKI HIRE</span>
          </h2>
          <p className="text-white text-xl mt-2 font-medium">Exclusive deal with our partners</p>
        </div>
        <div>
          <button className="bg-taxi-yellow text-taxi-dark px-10 py-4 rounded-lg font-extrabold text-xl shadow-lg hover:bg-white transition-colors uppercase">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkiHire;