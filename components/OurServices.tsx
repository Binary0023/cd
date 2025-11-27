import React from 'react';

const OurServices: React.FC = () => {
  return (
    <section className="py-20 bg-[#F0F5F7]" id="services">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0099cc] uppercase mb-10">Taxi Service Martigny</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
          <p>
            Based in Martigny and Verbier, the <span className="font-bold text-taxi-dark">Taxi Martigny</span> company has a wide range of vehicles ranging from taxis to minivans (7 seats) to buses (16 seats), including luxury limousines.
          </p>
          <p>
            Available 7 days a week, <span className="font-bold text-taxi-dark">Taxi Martigny</span> provides 24/7 transportation services in the highest standards of quality, safety, confidentiality, and comfort.
          </p>
          <p>
            We operate to and from world-renowned ski resorts such as <span className="font-bold text-taxi-dark">Verbier, La Tzoumaz, Crans Montana, Zermatt, and Saas Fee</span>, as well as major airports including <span className="font-bold text-taxi-dark">Geneva, Zurich, Sion, and Basel</span>.
          </p>
          <p>
            Our services range from group transportation to VIP transport, as well as the transport of luggage and small urgent packages.
          </p>
        </div>

        <div className="mt-12">
          <button className="bg-[#ED2559] text-white px-10 py-4 rounded-lg font-extrabold text-lg shadow-lg hover:bg-[#d61c4b] transition-colors uppercase">
            Book Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;