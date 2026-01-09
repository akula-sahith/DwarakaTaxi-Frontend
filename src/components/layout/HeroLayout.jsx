import Navbar from "./Navbar";
import herobg from "../../assets/hero-bg.jpg";

const HeroLayout = ({ children }) => {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundPosition: 'center 85%' // keep EXACT
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar variant="transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-start justify-center h-full">
        {children}
      </div>
    </div>
  );
};


export default HeroLayout;