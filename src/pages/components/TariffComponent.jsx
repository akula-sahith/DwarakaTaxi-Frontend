import React, { useState } from 'react';
import { ArrowRight, Repeat } from 'lucide-react';

const CarRentalComponent = () => {
  const [tripType, setTripType] = useState('oneway');

  const cars = [
    {
      type: 'Sedan',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop',
      basePrice: 14,
      driverBetta: 400,
      hillStation: 400,
      waiting: '200/Hr',
      color: 'bg-yellow-400'
    },
    {
      type: 'SUV',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop',
      basePrice: 19,
      driverBetta: 400,
      hillStation: 400,
      waiting: '250/Hr',
      color: 'bg-yellow-400'
    },
    {
      type: 'Innova',
      image: 'https://images.unsplash.com/photo-1570294646112-27ce4f174a6d?w=400&h=250&fit=crop',
      basePrice: 20,
      driverBetta: 500,
      hillStation: 500,
      waiting: '250/Hr',
      color: 'bg-yellow-400'
    },
    {
      type: 'Crysta',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop',
      basePrice: 22,
      driverBetta: 500,
      hillStation: 500,
      waiting: '300/Hr',
      color: 'bg-yellow-400'
    }
  ];

  return (
    <div className="bg-white py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto">
        {/* Trip Type Buttons */}
        <div className="flex gap-4 mb-6 max-w-2xl mx-auto">
          <button 
            onClick={() => setTripType('oneway')}
            className={`flex-1 py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
              tripType === 'oneway' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <ArrowRight size={20} />
            One way
          </button>
          <button 
            onClick={() => setTripType('roundtrip')}
            className={`flex-1 py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
              tripType === 'roundtrip' 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Repeat size={20} />
            Round Trip
          </button>
        </div>

        {/* Minimum Distance Info */}
        <div className="text-center mb-8 text-gray-600 text-sm flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Minimum 130 Kms
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Car Type Badge */}
              <div className="p-4 pb-0">
                <span className={`${car.color} text-black text-xs font-semibold px-4 py-1 rounded-full inline-block`}>
                  {car.type}
                </span>
              </div>

              {/* Car Image */}
              <div className="p-4">
                <img 
                  src={car.image} 
                  alt={car.type}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* Pricing Info */}
              <div className="px-6 pb-6">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold">₹{car.basePrice}</span>
                    <span className="text-gray-500 text-sm">/Km</span>
                  </div>
                  <span className="text-xs text-gray-500">Base fare rate</span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Driver Betta</span>
                    </div>
                    <span className="font-semibold">₹{car.driverBetta}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span>Hill Station</span>
                    </div>
                    <span className="font-semibold">₹{car.hillStation}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Waiting</span>
                    </div>
                    <span className="font-semibold">₹{car.waiting}</span>
                  </div>
                </div>

                {/* Book Now Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer">
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