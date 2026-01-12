import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";

const Navbar = ({ variant = "solid" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTransparent = variant === "transparent";

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/tariff", label: "Tariff" },
    { path: "/terms", label: "Terms&Conditions" },
  ];

  return (
    <nav className={`w-full ${isTransparent ? "bg-transparent" : "bg-[#0F0F0F]"}`}>
      <div className="w-full pl-4 pr-8 py-4 flex items-center justify-between font-['Bricolage_Grotesque','ui-sans-serif']">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={logo}
              alt="Dwaraka Taxi Logo"
              className="h-34 w-auto object-contain" 
            />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-t border-gray-800">
          <div className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-2 ${
                    isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;