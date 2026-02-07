import React from 'react';
import { MapPin, Repeat, Clock, Plane, Clipboard, IndianRupee } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-black rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-yellow-400" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default function TaxiServices() {
  const services = [
    {
      icon: MapPin,
      title: "Address Pickup",
      description: "Kartikeya Travels provides convenient address pickup, ensuring a smooth and hassle-free ride from your doorstep."
    },
    {
      icon: Repeat,
      title: "Round Trip Tours",
      description: "Your safety and comfort are our top priorities, offering a secure and relaxing ride every time."
    },
    {
      icon: Clock,
      title: "24×7 service",
      description: "Kartikeya Travels offers 24/7 service, providing reliable rides anytime you need them, day or night."
    },
    {
      icon: Plane,
      title: "Airport Pickup and Drop",
      description: "Enjoy hassle-free airport transfers with Kartikeya Travels, ensuring timely and reliable transportation to and from the airport."
    },
    {
      icon: Clipboard,
      title: "Outstation Travel",
      description: "Seamlessly connect cities with our reliable outstation travel services, ensuring comfort and affordability for your journey."
    },
    {
      icon: IndianRupee,
      title: "Affordable Rates",
      description: "Enjoy budget-friendly rides without compromising on quality, making your travel experience cost-effective and reliable."
    }
  ];

  return (
    <div className=" bg-gray-50 pt-15 pb-15 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}