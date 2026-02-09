import HeroSection from "../components/home/HeroSection";
// import BookingSection from "../components/booking/BookingSection";
import Footer from "../components/layout/Footer";
import BookingSection from "../components/home/BookingSection";
import TariffSection from "../components/home/CabTypes";
import About from "./About";
import ContactSection from "./components/ContactUsComponent";
import TermsPoliciesComponent from "./components/TermsandConditionsComponent";
import ServiceAreasBooking from "../components/home/ServiceAreas";
const HomePage = () => {
  return (
    <>
      {/* Hero Section (background image + heading + CTA) */}
      <HeroSection />
      {/* <HeroSection/> */}
      {/* Booking Form Section */}
      {/* <About/> */}
      <ContactSection/>
      <TermsPoliciesComponent/>
      <BookingSection />
      <TariffSection/>
      {/* Footer */}
      <ServiceAreasBooking/>
      <Footer />
    </>
  );
};

export default HomePage;
