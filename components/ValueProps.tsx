import React from 'react';
import { Gem, CalendarClock, Building2, Shuffle, ShieldCheck, FileText } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <Gem size={32} />,
      title: "Incredible Value",
      text: "We offer unbeatable value on both our shared and private transfers. Save money this winter!"
    },
    {
      icon: <CalendarClock size={32} />,
      title: "High Frequency",
      text: "We have shared transfers leaving Geneva airport and ski resorts on a regular basis to best suit your flight times."
    },
    {
      icon: <Building2 size={32} />,
      title: "Airport Desk",
      text: "We are located inside the Airport terminal so you will be met by our airport representatives."
    },
    {
      icon: <Shuffle size={32} />,
      title: "Flexibility",
      text: "Our unique Customer portal allows you the ability to manage and amend your reservation."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Booking",
      text: "Credit payments are secured by our acquiring bank and your card details are never stored."
    },
    {
      icon: <FileText size={32} />,
      title: "Account Facilities",
      text: "We are able to offer account facilities for tour operators, chalet companies, and travel agencies."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {props.map((prop, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-gray-100 shadow-md flex items-center justify-center text-taxi-yellow">
                {prop.icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-taxi-dark uppercase mb-3">{prop.title}</h3>
                <p className="text-gray-500 leading-relaxed">{prop.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;