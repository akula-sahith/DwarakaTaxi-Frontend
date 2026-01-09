import React from 'react';
import { Phone, Mail } from 'lucide-react';
import roadScene from "../../assets/footer-road-scene.png";
import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-12 relative overflow-hidden font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6 -ml-6 lg:-ml-26.5">
            <div className="w-40 h-40 flex items-center justify-center">
              {/* Logo without white background */}
              <img 
                src={logo}
                alt="Dwaraka Taxi Logo" 
                className="w-full object-contain rounded-[17px]"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your trusted travel companion for comfortable and reliable taxi services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
              <ul className="space-y-3">
                <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                <li className="hover:text-yellow-400 cursor-pointer">Services</li>
              </ul>
              <ul className="space-y-3">
                <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-yellow-400 cursor-pointer">Tariff</li>
                <li className="hover:text-yellow-400 cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-yellow-400 font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-gray-300">+91 9390271880 || +91 9160493797</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-gray-300">rameshponguleti13@gmail.com</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-yellow-400 font-medium">
                © Karthikeya Travels. All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Statement spanning columns 2 and 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-0 mb-10">
          <div></div>
          <div className="md:col-span-2">
            <p className="text-gray-500 text-[13px] leading-relaxed">
              We respect your privacy and ensure that your personal data will not be used for any purpose other than those explicitly stated. 
              Your information will never be shared, sold, or misused.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Road Scene Illustration */}
      <div className="w-full mt-4">
        <img 
          src={roadScene}
          alt="Road scene with taxi and street lights" 
          className="w-full object-cover h-auto block"
        />
      </div>
    </footer>
  );
};

export default Footer;