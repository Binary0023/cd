import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-0 bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Image Side */}
        <div className="lg:w-1/2 h-96 lg:h-auto relative min-h-[500px]">
          <img 
            src="https://picsum.photos/id/1025/1200/1200" 
            alt="Why Taxi Martigny" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-taxi-dark/20"></div>
        </div>

        {/* Text Side */}
        <div className="lg:w-1/2 p-10 md:p-20 bg-taxi-dark text-white flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 uppercase">Why Taxi Martigny?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Taxi Martigny offers great value shared and private transfers from Geneva Airport to ski resorts across the Valais region.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We are also serving Lyon, Grenoble and Zürich Airports with Private transfers to any resort you need as we develop our new routes.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With over 20 years of experience, our local drivers ensure you reach your destination safely and comfortably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;