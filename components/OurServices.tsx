import React from 'react';

const OurServices: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-taxi-dark uppercase mb-10">Our Services</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Our aim at <span className="font-bold text-taxi-dark">Taxi Martigny</span> is to offer our clients a choice when it comes to booking an Airport Ski Transfer. 
            We offer both shared, standard and premium private transfer services.
          </p>
          <p>
            We specialise in Airport Transfers from <span className="font-bold text-taxi-dark">Geneva Airport</span> that offer excellent value for money.
          </p>
          <p>
            Our most popular services are from Geneva airport to <span className="font-bold text-taxi-dark">Verbier</span>, <span className="font-bold text-taxi-dark">Martigny</span>, and <span className="font-bold text-taxi-dark">Chamonix</span>. 
            Not only are these transfers good on the pocket but they are also carbon friendly too!
          </p>
          <p>
            From this winter season 24/25 we are expanding our network.
            Our service is reliable and convenient and run by professionals who have a strong background in Airport Ski Transfers.
          </p>
        </div>

        <div className="mt-12">
          <button className="bg-taxi-yellow text-taxi-dark px-10 py-4 rounded-lg font-extrabold text-lg shadow-lg hover:bg-yellow-400 transition-colors uppercase">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;