import React from 'react';

const BookBanner: React.FC = () => {
  return (
    <section className="relative py-32 bg-taxi-dark overflow-hidden">
      <img src="https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2670&auto=format&fit=crop" alt="Mountain View" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-taxi-dark/80 to-taxi-dark/40"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white uppercase mb-6 drop-shadow-xl italic">
          Book Your Transfer
        </h2>
        <p className="text-white text-xl mb-10 font-medium drop-shadow-md">
          Compare now and get the best fares.
        </p>
        <button className="bg-[#ED2559] text-white px-12 py-4 rounded-lg font-extrabold text-lg shadow-xl hover:bg-[#d61c4b] transition-colors uppercase transform hover:-translate-y-1">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default BookBanner;