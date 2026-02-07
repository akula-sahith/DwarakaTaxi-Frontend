import React, { useState } from "react";
import { ArrowRight, Repeat } from "lucide-react";
import Sedan from "../../assets/sedan.png";
import Suv from "../../assets/suv.png";
import Innova from "../../assets/innova.png";
import Crysta from "../../assets/crysta.png";

const CarRentalComponent = () => {
  const [tripType, setTripType] = useState("oneway");

  const pricing = [
    {
      route: "Vijayawada → Hyderabad",
      trips: [
        {
          type: "One Way",
          prices: {
            Sedan: 6500,
            Ertiga: 7000,
            Innova: 8000,
            Crysta: 9000,
          },
        },
        {
          type: "Round Trip (1 Day)",
          prices: {
            Sedan: 12000,
            Ertiga: 13500,
            Innova: 15000,
            Crysta: 16000,
          },
        },
      ],
    },

    {
      route: "Vijayawada → Tirupati",
      trips: [
        {
          type: "One Way",
          prices: {
            Sedan: 9000,
            Ertiga: 10500,
            Innova: 11500,
            Crysta: 13000,
          },
        },
        {
          type: "Round Trip (2 Days)",
          prices: {
            Sedan: 18000,
            Ertiga: 20000,
            Innova: 21000,
            Crysta: 22000,
          },
        },
      ],
    },

    {
      route: "Vijayawada → Ongole",
      trips: [
        {
          type: "One Way",
          prices: {
            Sedan: 4000,
            Ertiga: 5000,
            Innova: 6000,
            Crysta: 7000,
          },
        },
        {
          type: "Round Trip (1 Day)",
          prices: {
            Sedan: 7500,
            Ertiga: 8500,
            Innova: 11000,
            Crysta: 13000,
          },
        },
      ],
    },

    {
      route: "Vijayawada → Srisailam",
      trips: [
        {
          type: "One Way",
          prices: {
            Sedan: 6500,
            Ertiga: 7500,
            Innova: 8500,
            Crysta: 9500,
          },
        },
        {
          type: "Round Trip (2 Days)",
          prices: {
            Sedan: 12000,
            Ertiga: 13000,
            Innova: 14000,
            Crysta: 15000,
          },
        },
      ],
    },
  ];

  const carImages = {
    Sedan: Sedan,
    Ertiga: Suv,
    Innova: Innova,
    Crysta: Crysta,
  };

  const localUsage = [
    { type: "Sedan", price: 1500 },
    { type: "Ertiga", price: 2000 },
    { type: "Innova", price: 2500 },
    { type: "Innova Crysta", price: 3000 },
  ];

  const kmPricing = [
    { type: "Sedan", rate: 14 },
    { type: "Ertiga", rate: 19 },
    { type: "Innova", rate: 20 },
    { type: "Crysta", rate: 24 },
  ];

  const handleBookNow = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-white py-6 sm:py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto">
        {/* One Day Local Usage Section */}
        <div className="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            One Day Local Usage
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {localUsage.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800 mb-2">{item.type}</p>
                <p className="text-2xl font-bold text-black">
                  ₹{item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kilometer Wise Pricing Section */}
        <div className="mb-12 bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Kilometer Wise Pricing
          </h2>
          <p className="text-center text-gray-600 mb-6">Minimum 130 kms</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {kmPricing.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800 mb-2">{item.type}</p>
                <p className="text-2xl font-bold text-black">
                  ₹{item.rate}/km
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trip Type Buttons */}
        <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 max-w-2xl mx-auto">
          <button
            onClick={() => setTripType("oneway")}
            className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg flex items-center justify-center gap-1 sm:gap-2 font-medium transition-colors text-sm sm:text-base ${
              tripType === "oneway"
                ? "bg-black text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            One way
          </button>
          <button
            onClick={() => setTripType("roundtrip")}
            className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-lg flex items-center justify-center gap-1 sm:gap-2 font-medium transition-colors text-sm sm:text-base ${
              tripType === "roundtrip"
                ? "bg-black text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Repeat size={18} className="sm:w-5 sm:h-5" />
            Round Trip
          </button>
        </div>

        {/* Route Pricing Grid */}
        <div className="max-w-7xl mx-auto space-y-10">
          {pricing.map((routeItem, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
              {/* Route Title */}
              <h2 className="text-xl font-bold mb-4 text-center">
                {routeItem.route}
              </h2>

              <div className="space-y-6">
                {routeItem.trips
                  .filter((trip) =>
                    tripType === "oneway"
                      ? trip.type === "One Way"
                      : trip.type.includes("Round Trip")
                  )
                  .map((trip, j) => (
                    <div key={j}>
                      {/* Trip Type */}
                      <h3 className="text-lg font-semibold mb-3 text-gray-700">
                        {trip.type}
                      </h3>

                      {/* Car Prices */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {Object.entries(trip.prices).map(([car, price]) => (
                          <div
                            key={car}
                            className="border rounded-xl p-4 text-center hover:shadow-md transition bg-white"
                          >
                            {/* Yellow Label */}
                            <div className="flex justify-center mb-3">
                              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                                {car}
                              </span>
                            </div>

                            {/* Car Image */}
                            <div className="mb-3 flex justify-center">
                              <img
                                src={carImages[car]}
                                alt={car}
                                className="h-24 sm:h-28 object-contain"
                              />
                            </div>

                            {/* Price */}
                            <p className="text-2xl font-bold mt-2">
                              ₹{price.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Including Toll & Driver price
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Book Now Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={handleBookNow}
                          className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRentalComponent;