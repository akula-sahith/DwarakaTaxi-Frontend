import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

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