import React from 'react';
import { Phone, Mail, Instagram, Youtube } from 'lucide-react';
import roadScene from "../../assets/footer-road-scene.png";
import logo from "../../assets/logo1.png";
const Footer = () => {
  // Placeholder images - replace with your actual image imports
  // const logo = "https://via.placeholder.com/160x160/FFD700/0F0F0F?text=Logo";
  // const roadScene = "https://via.placeholder.com/1920x200/1a1a1a/FFD700?text=Road+Scene";

  return (
    <footer className="bg-[#0F0F0F] text-white pt-8 md:pt-12 relative overflow-hidden font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start md:-ml-6 lg:-ml-26.5">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              {/* Logo without white background */}
              <img 
                src={logo}
                alt="Dwaraka Taxi Logo" 
                className="w-full object-contain rounded-[17px]"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Your trusted travel companion for comfortable and reliable taxi services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4 md:mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
              <ul className="space-y-3">
                <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href='/'>Home</a></li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href='/about'>About Us</a></li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href='/services'>Services</a></li>
              </ul>
              <ul className="space-y-3">
                <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href='/contact'>Contact Us</a></li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href='/tariff'>Tariff</a></li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors"><a href='/terms'>Terms and Conditions</a></li>
                {/* <li className="hover:text-yellow-400 cursor-pointer transition-colors">Terms & Conditions</li> */}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-yellow-400 font-bold text-lg mb-4 md:mb-6">Contact Us</h3>
            <div className="space-y-3 md:space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+91 9346219126</span>
                <span className="text-gray-300">+91 9160493797</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 break-all">kondalugatta14@gmail.com</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-2  md:pt-2"> 
              <h4 className="text-yellow-400 font-medium text-sm mb-3 font-['Bricolage_Grotesque','ui-sans-serif']">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/dont_touch_car?utm_source=qr&igsh=MWN1aXRrbmJoYXloNA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://m.youtube.com/%40gattakondalu-s6s?fbclid=PAb21jcAPPLb1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeYGkVoOOsFnV8qCbYJAr9jAWO6rVUTmYiR28Eps49JILkbiLzJuG6v5vDH9A_aem_zqGqwnmRpFpXw97d1QCsrw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
            
            <div className="pt-2 md:pt-2">
              <p className="text-yellow-400 font-medium text-sm md:text-base">
                © Kartikeya Travels. All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Statement spanning columns 2 and 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-6 md:mt-0 mb-8 md:mb-10">
          <div></div>
          <div className="md:col-span-2">
            <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed">
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