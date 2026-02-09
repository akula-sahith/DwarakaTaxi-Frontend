import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Owner from "../../assets/owner.jpeg";

const ContactCard = ({ icon: Icon, title, description, contactInfo, isEmail, isWhatsApp }) => {
  const getHref = () => {
    if (isEmail) return `mailto:${contactInfo}`;
    if (isWhatsApp) return `https://wa.me/${contactInfo.replace(/[^0-9]/g, '')}`;
    return `tel:${contactInfo}`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
      <div className="bg-yellow-500 rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
        {description}
      </p>
      <a 
        href={getHref()}
        target={isWhatsApp ? "_blank" : undefined}
        rel={isWhatsApp ? "noopener noreferrer" : undefined}
        className={`text-gray-900 font-${isEmail ? 'medium' : 'bold'} text-${isEmail ? 'sm sm:text-base' : 'lg sm:text-xl'} hover:text-yellow-600 transition-colors ${isEmail ? 'underline break-all' : ''}`}
      >
        {contactInfo}
      </a>
    </div>
  );
};

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "CALL US",
      description: "Have a quick question or need instant booking help? Call our support team anytime.",
      contactInfo: "+91 9346219126",
      isEmail: false,
      isWhatsApp: false
    },
    {
      icon: MessageCircle,
      title: "WHATSAPP US",
      description: "Chat with us for fares, availability, and bookings. Fast replies, anytime.",
      contactInfo: "+91 6281082164",
      isEmail: false,
      isWhatsApp: true
    },
    {
      icon: Mail,
      title: "MAIL US",
      description: "Send us your queries or feedback. We'll get back to you as soon as possible.",
      contactInfo: "kondalugatta14@gmail.com",
      isEmail: true,
      isWhatsApp: false
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-6xl mx-auto">

        {/* OWNER IMAGE WITH ABOUT TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          {/* Left side - Owner photo with circular text */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Circular text */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  />
                </defs>
                <text className="text-lg sm:text-xl font-bold fill-yellow-600" letterSpacing="6">
                  <textPath href="#circlePath" startOffset="0%">
                    KARTIKEYA TRAVELS
                  </textPath>
                </text>
              </svg>
              
              {/* Owner Image */}
              <img
                src={Owner}
                alt="Owner"
                className="absolute inset-0 m-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-md border-4 border-yellow-500 ring-2 ring-yellow-300"
              />
            </div>
          </div>

          {/* Right side - About text */}
          <div className="space-y-3 sm:space-y-4 text-gray-800 leading-relaxed">
            <p className="text-sm sm:text-base lg:text-lg">
              At <span className="font-semibold">Kartikeya Travels</span>, your comfort and convenience are our priority. We provide dependable intercity taxi services across South India – connecting cities, towns, and people with safety and style. Our fleet of clean, well-maintained cars and professional drivers ensures you enjoy every mile of your journey, whether it's a business trip, a weekend getaway, or an airport transfer.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Travel made simple, safe, and affordable – that's our promise at Kartikeya Travels. We're your trusted travel companion across Andhra Pradesh and Telangana. From one-way rides to round trips, our experienced drivers and comfortable vehicles make every journey smooth and stress-free.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              title={contact.title}
              description={contact.description}
              contactInfo={contact.contactInfo}
              isEmail={contact.isEmail}
              isWhatsApp={contact.isWhatsApp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}