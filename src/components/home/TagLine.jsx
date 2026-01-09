import React from 'react';

const CabTypesPricingHeader = () => {
  return (
    <div className="w-full bg-white py-0 px-6 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge/Button */}
        <div className="inline-block mb-6">
          <div className="border-2 border-yellow-400 rounded-full px-8 py-3">
            <span className="text-black font-semibold text-lg tracking-wide">
              CAB TYPES & PRICING
            </span>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
          Enjoy a comfortable ride with well-maintained vehicles designed for city travel, long-distance journeys, and airport transfers
        </p>
      </div>
    </div>
  );
};

export default CabTypesPricingHeader;