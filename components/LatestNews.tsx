import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestNews: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-taxi-dark uppercase">Latest News</h2>
          <a href="#" className="text-taxi-yellow font-bold uppercase flex items-center gap-2">View All <ArrowRight size={18}/></a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer">
            <div className="h-64 overflow-hidden">
              <img src="https://picsum.photos/id/1033/600/400" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-400 mb-2 font-bold uppercase">Transfers</div>
              <h3 className="text-2xl font-bold text-taxi-dark mb-3 group-hover:text-taxi-yellow transition-colors">How to Get From Geneva to Chamonix</h3>
              <p className="text-gray-500 mb-4">Learn the best ways to get from Geneva to Chamonix and why Taxi Martigny transfers offer a fast journey.</p>
              <span className="text-taxi-yellow font-bold text-sm uppercase">Read More</span>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer">
            <div className="h-64 overflow-hidden">
              <img src="https://picsum.photos/id/1060/600/400" alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-400 mb-2 font-bold uppercase">Tips</div>
              <h3 className="text-2xl font-bold text-taxi-dark mb-3 group-hover:text-taxi-yellow transition-colors">Is Verbier Good for Beginners?</h3>
              <p className="text-gray-500 mb-4">Discover why Verbier is ideal for beginner skiers and how our transfers make reaching the resort simple.</p>
              <span className="text-taxi-yellow font-bold text-sm uppercase">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;