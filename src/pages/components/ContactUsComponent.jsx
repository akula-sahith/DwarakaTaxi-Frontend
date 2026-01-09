import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, description, contactInfo, isEmail }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
      <div className="bg-yellow-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      {isEmail ? (
        <a 
          href={`mailto:${contactInfo}`}
          className="text-gray-900 font-medium text-base hover:text-yellow-600 transition-colors underline"
        >
          {contactInfo}
        </a>
      ) : (
        <a 
          href={`tel:${contactInfo}`}
          className="text-gray-900 font-bold text-xl hover:text-yellow-600 transition-colors"
        >
          {contactInfo}
        </a>
      )}
    </div>
  );
};

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "CALL US",
      description: "Have a quick question or need instant booking help? Call our support team anytime.",
      contactInfo: "+91 9390271880",
      isEmail: false
    },
    {
      icon: MessageCircle,
      title: "WHATSAPP US",
      description: "Chat with us for fares, availability, and bookings. Fast replies, anytime.",
      contactInfo: "+91 9390271880",
      isEmail: false
    },
    {
      icon: Mail,
      title: "MAIL US",
      description: "Send us your queries or feedback. We'll get back to you as soon as possible.",
      contactInfo: "rameshponguletil3@gmail.com",
      isEmail: true
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 font-['Bricolage_Grotesque','ui-sans-serif']">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              icon={contact.icon}
              title={contact.title}
              description={contact.description}
              contactInfo={contact.contactInfo}
              isEmail={contact.isEmail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}