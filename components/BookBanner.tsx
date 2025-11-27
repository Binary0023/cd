import React from 'react';

const BookBanner: React.FC = () => {
  return (
    <section className="relative py-32 bg-taxi-yellow">
      <img src="https://picsum.photos/id/1019/1600/600" alt="Mountain View" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 grayscale" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white uppercase mb-6 drop-shadow-lg">Book Your Transfer</h2>
        <p className="text-white text-xl mb-10 font-medium drop-shadow-md">Compare now and get the best fares.</p>
        <button className="bg-taxi-yellow text-taxi-dark px-12 py-4 rounded-lg font-extrabold text-lg shadow-xl hover:bg-white transition-colors uppercase">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default BookBanner;