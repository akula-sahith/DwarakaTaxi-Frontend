import React, { useState } from 'react';
import { ArrowRight, Repeat } from 'lucide-react';
import Sedan from "../../assets/sedan.png";
import Suv from "../../assets/suv.png";
import Innova from "../../assets/innova.png";
import Crysta from "../../assets/crysta.png";
const CarRentalComponent = () => {
  const [tripType, setTripType] = useState('oneway');

  const cars = [
    {
      type: 'Sedan',
      image: Sedan,
      basePrice: 14,
      driverBetta: 400,
      hillStation: 400,
      waiting: '200/Hr',
      color: 'bg-yellow-400',
      roundTripPrice: 5999
    },
    {
      type: 'SUV',
      image: Suv,
      basePrice: 19,
      driverBetta: 400,
      hillStation: 400,
      waiting: '250/Hr',
      color: 'bg-yellow-400',
      roundTripPrice: 7499
    },
    {
      type: 'Innova',
      image: Innova,
      basePrice: 20,
      driverBetta: 500,
      hillStation: 500,
      waiting: '250/Hr',
      color: 'bg-yellow-400',
      roundTripPrice: 8999
    },
    {
      type: 'Crysta',
      image: Crysta,
      basePrice: 22,
      driverBetta: 500,
      hillStation: 500,
      waiting: '300/Hr',
      color: 'bg-yellow-400',
      roundTripPrice: 9999
    }
  ];

  return (
    <div className="bg-white py-6 sm:py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto">
        {/* Trip Type Buttons */}
        <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 max-w-2xl mx-auto">
          <button 
            onClick={() => setTripType('oneway')}
            className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg flex items-center justify-center gap-1 sm:gap-2 font-medium transition-colors text-sm sm:text-base ${
              tripType === 'oneway' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            One way
          </button>
          <button 
            onClick={() => setTripType('roundtrip')}
            className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg flex items-center justify-center gap-1 sm:gap-2 font-medium transition-colors text-sm sm:text-base ${
              tripType === 'roundtrip' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Repeat size={18} className="sm:w-5 sm:h-5" />
            Round Trip
          </button>
        </div>

        {/* Minimum Distance Info */}
        <div className="text-center mb-6 sm:mb-8 text-gray-600 text-xs sm:text-sm flex items-center justify-center gap-2">
          {/* <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Minimum 130 Kms */}
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Car Type Badge */}
              <div className="p-3 sm:p-4 pb-0">
                <span className={`${car.color} text-black text-xs font-semibold px-3 sm:px-4 py-1 rounded-full inline-block`}>
                  {car.type}
                </span>
              </div>

              {/* Car Image */}
              <div className="p-3 sm:p-4">
                <img 
                  src={car.image} 
                  alt={car.type}
                  className="w-full h-32 sm:h-40 object-contain"
                />
              </div>

              {/* Pricing Info */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                {tripType === 'oneway' ? (
                  <>
                    <div className="flex items-end justify-between mb-3 sm:mb-4">
                      <div>
                        <span className="text-2xl sm:text-3xl font-bold">₹{car.basePrice}</span>
                        <span className="text-gray-500 text-xs sm:text-sm">/Km</span>
                      </div>
                      <span className="text-xs text-gray-500">Base fare rate</span>
                    </div>

                    <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-700 text-center">
                        Including Toll & Driver price
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold">₹{car.roundTripPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Total trip cost</p>
                    </div>

                    {/* Details */}
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      {/* <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>Driver Betta</span>
                        </div>
                        <span className="font-semibold">₹{car.driverBetta}</span>
                      </div> */}

                      {/* <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          <span>Hill Station</span>
                        </div>
                        <span className="font-semibold">₹{car.hillStation}</span>
                      </div> */}

                      {/* <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Waiting</span>
                        </div>
                        <span className="font-semibold">₹{car.waiting}</span>
                      </div> */}
                      <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-700 text-center">
                        Including Toll & Driver price
                      </p>
                    </div>
                     <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-700 text-center">
                        Hyderabad to Vijayawada to Hyderabad
                      </p>
                    </div>
                    </div>
                  </>
                )}

                {/* Book Now Button */}
                <button className="w-full bg-black text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer text-sm sm:text-base">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRentalComponent;