import React, { useState, useEffect, useRef } from "react";
import Car from "../../assets/car.png";
import roadScene from "../../assets/footer-road-scene.png";
import Design from "../../assets/design.png";
const BookingSection = () => {
  const [tripType, setTripType] = useState("ONE_WAY");
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    name: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    email: "",
    numberOfDays: "",
    cabType: "SEDAN",
    distanceKm: 0,
    estimatedFare: 0,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropSuggestions, setShowDropSuggestions] = useState(false);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropCoords, setDropCoords] = useState(null);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);
  const pickupDebounceRef = useRef(null);
  const dropDebounceRef = useRef(null);

  // Replace with your Mapbox access token
  const MAPBOX_TOKEN =
    "sk.eyJ1Ijoic2FoaXRoMTIwOCIsImEiOiJjbWs0Ym9panYwNTBlM2RxczJsYXUxM2UxIn0.TKA-THUPKSw3zoX6Z3-zXg";

  const fetchMapboxSuggestions = async (query, setSuggestions) => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json?access_token=${MAPBOX_TOKEN}&autocomplete=true&limit=5`
      );
      const data = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handlePickupInputChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, pickup: value }));
    setShowPickupSuggestions(true);

    if (pickupDebounceRef.current) {
      clearTimeout(pickupDebounceRef.current);
    }

    pickupDebounceRef.current = setTimeout(() => {
      fetchMapboxSuggestions(value, setPickupSuggestions);
    }, 300);

    if (errors.pickup) {
      setErrors((prev) => ({ ...prev, pickup: "" }));
    }
  };

  const handleDropInputChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, drop: value }));
    setShowDropSuggestions(true);

    if (dropDebounceRef.current) {
      clearTimeout(dropDebounceRef.current);
    }

    dropDebounceRef.current = setTimeout(() => {
      fetchMapboxSuggestions(value, setDropSuggestions);
    }, 300);

    if (errors.drop) {
      setErrors((prev) => ({ ...prev, drop: "" }));
    }
  };

  const selectPickupLocation = (place) => {
    setFormData((prev) => ({ ...prev, pickup: place.place_name }));
    setPickupCoords(place.center);
    setShowPickupSuggestions(false);
    setPickupSuggestions([]);
    if (pickupRef.current) {
      pickupRef.current.value = place.place_name;
    }
  };

  const selectDropLocation = (place) => {
    setFormData((prev) => ({ ...prev, drop: place.place_name }));
    setDropCoords(place.center);
    setShowDropSuggestions(false);
    setDropSuggestions([]);
    if (dropRef.current) {
      dropRef.current.value = place.place_name;
    }
  };

  const calculateDistance = async () => {
    if (!pickupCoords || !dropCoords) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${dropCoords[0]},${dropCoords[1]}?access_token=${MAPBOX_TOKEN}`
      );
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const distanceInMeters = data.routes[0].distance;
        const distanceKm = parseFloat((distanceInMeters / 1000).toFixed(2));

        const estimatedFare = calculateFare(distanceKm, formData.cabType);

        setFormData((prev) => ({
          ...prev,
          distanceKm,
          estimatedFare,
        }));
      }
    } catch (error) {
      console.error("Error calculating distance:", error);
    }
  };

  useEffect(() => {
    if (pickupCoords && dropCoords) {
      calculateDistance();
    }
  }, [pickupCoords, dropCoords]);

  const calculateFare = (distanceKm, cabType) => {
    const baseFare = 100;
    const rates = {
      HATCHBACK: 12,
      SEDAN: 15,
      SUV: 18,
      TEMPO_TRAVELLER: 22,
    };

    const perKmRate = rates[cabType] || rates.SEDAN;
    return Math.round(baseFare + distanceKm * perKmRate);
  };

  useEffect(() => {
    if (formData.distanceKm > 0) {
      const fare = calculateFare(formData.distanceKm, formData.cabType);
      setFormData((prev) => ({ ...prev, estimatedFare: fare }));
    }
  }, [formData.cabType, formData.distanceKm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pickup) newErrors.pickup = "Pickup location is required";
    if (!formData.drop) newErrors.drop = "Drop location is required";
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.phone) newErrors.phone = "Mobile number is required";
    if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
    if (!formData.pickupTime) newErrors.pickupTime = "Pickup time is required";
    if (tripType === "ROUND_TRIP" && !formData.numberOfDays) {
      newErrors.numberOfDays = "Number of days is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    const payload = {
      name: formData.name,
      phone: formData.phone,
      pickup: formData.pickup,
      drop: formData.drop,
      cabType: formData.cabType,
      tripType: tripType,
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      distanceKm: formData.distanceKm,
      estimatedFare: formData.estimatedFare,
    };

    if (formData.email) {
      payload.email = formData.email;
    }

    if (tripType === "ROUND_TRIP") {
      payload.numberOfDays = parseInt(formData.numberOfDays);
    }

    try {
      const response = await fetch(
        "https://dwarakataxi-backend.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit booking");
      }

      alert("Booking submitted successfully. We will contact you shortly.");

      setFormData({
        pickup: "",
        drop: "",
        name: "",
        phone: "",
        pickupDate: "",
        pickupTime: "",
        email: "",
        numberOfDays: "",
        cabType: "SEDAN",
        distanceKm: 0,
        estimatedFare: 0,
      });

      setPickupCoords(null);
      setDropCoords(null);

      if (pickupRef.current) pickupRef.current.value = "";
      if (dropRef.current) dropRef.current.value = "";
    } catch (error) {
      alert(error.message || "Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="w-full bg-white py-8 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-yellow-400 rounded-full px-8 py-2 mb-4">
            <h2 className="text-xl font-medium">Book Your Taxi</h2>
          </div>
          <p className="text-gray-600">
            We are providing one way taxi, round trip taxi, Outstation cabs,
            drop taxi and airport taxi service
          </p>
        </div>

        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            <div className="relative bg-black overflow-hidden flex items-center">
              <img
                src={Car}
                alt="Car Image"
                className="
      absolute
      right-[35%]
      w-[120%]
      max-w-none
      object-contain
      scale-x-[-1]
    "
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23000" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ECar Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            <div className="bg-white rounded-3xl p-8 lg:rounded-l-none">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setTripType("ONE_WAY")}
                  className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    tripType === "ONE_WAY"
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-300"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  One way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("ROUND_TRIP")}
                  className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    tripType === "ROUND_TRIP"
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-300"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  Round Trip
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">
                      Pickup Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <input
                        ref={pickupRef}
                        type="text"
                        name="pickup"
                        onChange={handlePickupInputChange}
                        onFocus={() => setShowPickupSuggestions(true)}
                        placeholder="Enter pickup location"
                        className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>
                    {showPickupSuggestions && pickupSuggestions.length > 0 && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {pickupSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            onClick={() => selectPickupLocation(suggestion)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          >
                            {suggestion.place_name}
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.pickup && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.pickup}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">
                      Drop Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <input
                        ref={dropRef}
                        type="text"
                        name="drop"
                        onChange={handleDropInputChange}
                        onFocus={() => setShowDropSuggestions(true)}
                        placeholder="Enter drop location"
                        className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>
                    {showDropSuggestions && dropSuggestions.length > 0 && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {dropSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            onClick={() => selectDropLocation(suggestion)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          >
                            {suggestion.place_name}
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.drop && (
                      <p className="text-red-500 text-xs mt-1">{errors.drop}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter mobile number"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pickup Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        placeholder="31-12-2025"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    {errors.pickupDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.pickupDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pickup Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                        placeholder="22:01"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    {errors.pickupTime && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.pickupTime}
                      </p>
                    )}
                  </div>
                </div>

                {tripType === "ROUND_TRIP" && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Number of Days <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="numberOfDays"
                      value={formData.numberOfDays}
                      onChange={handleInputChange}
                      placeholder="Enter number of days"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                    {errors.numberOfDays && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.numberOfDays}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                {formData.distanceKm > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Estimated Distance:
                      </span>
                      <span className="font-semibold">
                        {formData.distanceKm} KM
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Estimated Fare:
                      </span>
                      <span className="font-semibold text-green-600">
                        ₹{formData.estimatedFare}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      * Final fare may vary based on traffic and route
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Book your Taxi now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-4 py-22">
        <img 
          src={Design}
          alt="Road scene with taxi and street lights" 
          className="w-full object-cover h-auto block"
        />
      </div>
    </>
  );
};

export default BookingSection;
