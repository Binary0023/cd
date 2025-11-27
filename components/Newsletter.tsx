import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-taxi-dark uppercase mb-2">Sign Up to Our Newsletter</h2>
          <p className="text-gray-500">Stay updated with the latest offers and news from Taxi Martigny.</p>
        </div>
        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" className="border-2 border-gray-200 p-4 rounded-lg outline-none focus:border-taxi-yellow bg-gray-50" />
            </div>
            <button className="bg-taxi-dark text-white font-bold py-4 rounded-lg hover:bg-taxi-yellow hover:text-taxi-dark transition-colors uppercase w-32">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;