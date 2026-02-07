import React from 'react';
import { Target, Clock, Star } from 'lucide-react';

const TermsPoliciesComponent = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto">
        {/* General Terms Section */}
        <h1 className="text-3xl font-bold mb-6">General Terms</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Vehicle Capacity Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Target className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-lg font-semibold">Vehicle Capacity</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">Sedan</div>
                  <div className="text-xs text-gray-500">Standard</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">4 persons</div>
                  <div className="text-xs text-gray-500">2 bags</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">Ertiga</div>
                  <div className="text-xs text-gray-500">Family</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">6+1 persons</div>
                  <div className="text-xs text-gray-500">3 bags</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">Innova</div>
                  <div className="text-xs text-gray-500">Premium</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">7+1 persons</div>
                  <div className="text-xs text-gray-500">3 bags</div>
                </div>
              </div>
            </div>
          </div>

          {/* Waiting Charges Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Clock className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-lg font-semibold">Waiting Charges</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="font-medium text-gray-700">Sedan</div>
                <div className="font-semibold text-gray-900">₹200/hr</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-medium text-gray-700">Ertiga</div>
                <div className="font-semibold text-gray-900">₹250/hr</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-medium text-gray-700">Innova</div>
                <div className="font-semibold text-gray-900">₹250/hr</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-medium text-gray-700">Innova Crysta</div>
                <div className="font-semibold text-gray-900">₹300/hr</div>
              </div>
            </div>
          </div>

          {/* Distance Rules Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Target className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-lg font-semibold">Distance Rules</h2>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700">One-way trip</div>
                <div className="text-sm">Min: <span className="font-semibold">130Kms</span></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700">Round Trip ( TN only)</div>
                <div className="text-sm">Min: <span className="font-semibold">250Kms</span></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-700">Round Trip ( All )</div>
                <div className="text-sm">Min: <span className="font-semibold">300Kms</span></div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Target className="text-yellow-400" size={24} />
                </div>
                <h2 className="text-lg font-semibold">Distance Rules</h2>
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Luggage carrier ₹400</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Toll, permits, hill charges extra</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pet charges if applicable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complimentary Services Banner */}
        <div className="bg-black rounded-2xl p-6 mb-8 flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <Star className="text-black" size={24} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Complimentary Services</h3>
            <p className="text-gray-300 text-sm">No extra charge for tea and food breaks.</p>
          </div>
        </div>

        {/* Round Trip Conditions Section */}
        <h2 className="text-3xl font-bold mb-6">Round Trip Conditions</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bangalore Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
            <div className="mb-4">
              <span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full">
                Andhra Pradesh & Telangana              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Target size={18} />
                  <span className="font-semibold">Min 300Kms</span>
                </div>
                <span className="text-sm text-gray-500">Distance</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={18} />
                  <span className="font-semibold">6 Am - 10 PM</span>
                </div>
                <span className="text-sm text-gray-500">Operating hours</span>
              </div>

              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Extra charges 9:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-location Cards */}
          <div className="space-y-4">
            {/* Tamilnadu Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
              <div className="mb-4">
                <span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full">
                  Telangana and Andhra Pradesh
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={18} />
                  <span className="font-semibold">6 Am - 11:59 PM</span>
                </div>
                <span className="text-sm text-gray-500">Operating hours</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mt-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Extra charges 9:30 PM</span>
              </div>
            </div>

            {/* Kerala Card */}
            {/* <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
              <div className="mb-4">
                <span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full">
                  Kerala
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={18} />
                  <span className="font-semibold">6 Am - 9 PM</span>
                </div>
                <span className="text-sm text-gray-500">Operating hours</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Important Policies Section */}
        <h2 className="text-3xl font-bold mb-6">Important Policies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cancellation Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
            <h3 className="font-semibold text-lg mb-3">Cancellation</h3>
            <p className="text-sm text-gray-600">₹500 charges apply after driver arrival</p>
          </div>

          {/* Payment Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
            <h3 className="font-semibold text-lg mb-3">Payment</h3>
            <p className="text-sm text-gray-600">Online or cash accepted</p>
          </div>

          {/* Important Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
            <h3 className="font-semibold text-lg mb-3">Important</h3>
            <p className="text-sm text-gray-600">Note start/end Kms, Toll via Fastag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPoliciesComponent;