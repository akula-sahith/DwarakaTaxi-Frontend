import React from "react";
import { ArrowUpRight } from "lucide-react";
import Hline from "../../assets/hdesign.png";
const ServiceAreasBooking = () => {
  const locations = [
    "Hyderabad",
    "Vijayawada",
    "Vizag",
    "Tirupati",
    "Guntur",
    "Secunderabad",
  ];

  return (
    <div className="w-full">
      {/* Service Areas Section */}
      <div className="bg-black text-white py-16 px-6 font-['Bricolage_Grotesque','ui-sans-serif']">
        <div className="max-w-7xl mx-auto text-center">
          {/* Service Areas Badge */}
          <div className="inline-block mb-8">
            <div className="border-2 border-yellow-400 rounded-full px-8 py-2">
              <span className="text-white font-medium text-sm tracking-wider">
                SERVICE AREAS
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
            We Serve Across Andhra Pradesh & Telangana
          </h2>

          {/* Subheading */}
          <p className="text-white text-base md:text-lg mb-12">
            Reliable intercity taxi services across:
          </p>

          {/* Scrolling Locations */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="inline-block bg-white text-black px-6 py-3 mx-2 rounded-lg font-medium text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Taxi Checkered Pattern Border */}
      <div className="w-full">
        <img
          src={Hline}
          alt="Taxi Design Strip"
          className="w-full h-auto block"
        />
      </div>

      {/* Book Your Taxi Section */}
      <div className="bg-gray-50 py-16 px-6 font-['Bricolage_Grotesque','ui-sans-serif']">
        <div className="max-w-4xl mx-auto text-center">
          {/* Dwaraka Taxi Badge */}
          <div className="inline-block mb-6">
            <div className="border-2 border-yellow-400 rounded-full px-8 py-2">
              <span className="text-black font-medium text-sm tracking-wider">
                KARTHIKEYA TRAVELS
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Book Your Taxi Today
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-base md:text-lg mb-8 font-['Bricolage_Grotesque','ui-sans-serif']">
            Travel safely and comfortably across South India.
          </p>

          {/* Book Your Ride Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all hover:scale-105">
            <span className="text-lg">Book Your Ride</span>
            <div className="bg-black rounded-full p-2">
              <ArrowUpRight className="text-yellow-400" size={20} />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ServiceAreasBooking;
