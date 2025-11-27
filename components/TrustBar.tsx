import React from 'react';
import { Star } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-10 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center gap-1">
            <span className="font-bold text-xl mr-2">Excellent</span>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-[#00b67a] p-1">
                <Star size={20} className="text-white fill-white" />
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Based on <strong>450+ reviews</strong> on <span className="font-bold text-black">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;