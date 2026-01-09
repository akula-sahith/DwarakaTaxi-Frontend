import { NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";

const Navbar = ({ variant = "solid" }) => {
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
      {/* Changed max-w-7xl mx-auto to w-full and used pl-4 for a slight gap from the edge */}
      <div className="w-full pl-4 pr-8 py-4 flex items-center justify-between font-['Bricolage_Grotesque','ui-sans-serif']">
        
        {/* Logo - flex-1 helps push the links to the right */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src={logo}
              alt="Dwaraka Taxi Logo"
              className="h-34 w-auto object-contain" 
            />
          </NavLink>
        </div>

        {/* Links */}
        <div className="flex gap-8">
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
      </div>
    </nav>
  );
};

export default Navbar;