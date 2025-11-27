import React from 'react';
import { MousePointerClick, RefreshCcw, Map, UserCheck, Mountain } from 'lucide-react';

const StressFree: React.FC = () => {
  const steps = [
    { icon: <MousePointerClick size={40} />, title: "BOOK YOUR TRANSFER" },
    { icon: <RefreshCcw size={40} />, title: "FLEXIBILITY TO AMEND" },
    { icon: <Map size={40} />, title: "TRACK YOUR TRANSFER" },
    { icon: <UserCheck size={40} />, title: "MEET YOUR DRIVER" },
    { icon: <Mountain size={40} />, title: "ENJOY YOUR VACATION" },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-taxi-dark uppercase leading-tight mb-6">
              Stress-Free<br/>Service
            </h2>
            <button className="bg-taxi-yellow text-taxi-dark px-10 py-3 rounded-lg font-bold uppercase shadow-md hover:bg-yellow-400 transition-colors">
              Book Now
            </button>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {/* Dotted Line (Hidden on mobile for simplicity) */}
              <div className="hidden lg:block absolute top-10 left-16 right-16 border-t-2 border-dashed border-taxi-yellow -z-0"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center z-10 relative">
                  <div className="w-20 h-20 bg-white border-2 border-taxi-yellow rounded-full flex items-center justify-center text-taxi-dark mb-4 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="font-extrabold text-taxi-dark text-sm uppercase leading-tight max-w-[120px]">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StressFree;