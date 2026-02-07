import React from 'react';
import { Clock, Shield, Monitor, Send, IndianRupee } from 'lucide-react';
import KartikeyaAnimation from "../../assets/KartikeyaAnimation.mp4";
const AboutPromiseComponent = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Video */}
          <div className="rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-96 bg-black">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={KartikeyaAnimation}type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 text-gray-800 leading-relaxed">
            <p className="text-sm sm:text-base lg:text-lg">
              At <span className="font-semibold">Kartikeya Travels</span>, your comfort and convenience are our priority. We provide dependable intercity taxi services across South India – connecting cities, towns, and people with safety and style. Our fleet of clean, well-maintained cars and professional drivers ensures you enjoy every mile of your journey, whether it's a business trip, a weekend getaway, or an airport transfer.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Travel made simple, safe, and affordable – that's our promise at Kartikeya Travels. We're your trusted travel companion across Andhra Pradesh and Telangana. From one-way rides to round trips, our experienced drivers and comfortable vehicles make every journey smooth and stress-free.
            </p>
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="bg-black py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 text-center mb-8 sm:mb-12">
            Our Promise to You
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Round-the-Clock Availability */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Round-the-Clock Availability</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Travel anytime, day or night, with our 24/7 taxi services always ready for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified and Professional Drivers */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Verified and Professional Drivers</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Professionally trained, verified drivers focused on your safety and comfort.
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Booking via Web */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Instant Booking via Web</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Book your ride in seconds with our web platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* One-Way, Round Trips, and Airport Transfers */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Send className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">One-Way, Round Trips, and Airport Transfers</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Flexible travel options tailored to your journey—outstation, round trips, or airport rides.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent and Competitive Pricing */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <IndianRupee className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Transparent and Competitive Pricing</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    No hidden charges—know your fare upfront and pay only for the distance you travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPromiseComponent;