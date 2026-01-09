import HeroSection from "../components/home/HeroSection";
// import BookingSection from "../components/booking/BookingSection";
import Footer from "../components/layout/Footer";
import BookingSection from "../components/home/BookingSection";
import TariffSection from "../components/home/CabTypes";
import ServiceAreasBooking from "../components/home/ServiceAreas";
const HomePage = () => {
  return (
    <>
      {/* Hero Section (background image + heading + CTA) */}
      <HeroSection />
      {/* <HeroSection/> */}
      {/* Booking Form Section */}
      <BookingSection />
      <TariffSection/>
      {/* Footer */}
      <ServiceAreasBooking/>
      <Footer />
    </>
  );
};

export default HomePage;
