import React from 'react';
import { MousePointerClick, RefreshCcw, Map, UserCheck, Mountain } from 'lucide-react';

const StressFree: React.FC = () => {
  const steps = [
    { icon: <MousePointerClick size={32} />, title: "BOOK YOUR TRANSFER" },
    { icon: <RefreshCcw size={32} />, title: "FLEXIBILITY TO AMEND" },
    { icon: <Map size={32} />, title: "TRACK YOUR TRANSFER" },
    { icon: <UserCheck size={32} />, title: "MEET YOUR DRIVER" },
    { icon: <Mountain size={32} />, title: "ENJOY YOUR VACATION" },
  ];

  return (
    <section className="py-24 bg-[#F0F5F7] border-t border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center gap-16">
          
          <div className="xl:w-1/4 text-center xl:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-taxi-dark uppercase leading-none mb-6">
              Stress-Free<br/><span className="text-[#0099cc]">Service</span>
            </h2>
            <button className="bg-[#ED2559] text-white px-10 py-3 rounded-lg font-bold uppercase shadow-md hover:bg-[#d61c4b] transition-colors">
              Book Now
            </button>
          </div>

          <div className="xl:w-3/4 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {/* Dotted Line */}
              <div className="hidden lg:block absolute top-12 left-20 right-20 border-t-2 border-dashed border-[#0099cc]/30 -z-0"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center z-10 relative group">
                  <div className="w-24 h-24 bg-white border-2 border-[#F0F5F7] rounded-full flex items-center justify-center text-[#0099cc] mb-6 shadow-sm group-hover:border-[#0099cc] transition-colors">
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