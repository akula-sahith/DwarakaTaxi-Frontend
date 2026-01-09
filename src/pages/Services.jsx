// import Navbar from "../components/Navbar";
import SolidPageHeader from "../components/layout/SolidPageHeader";
import TaxiServices from "./components/ServiceComponent";
const Services = () => {
  return (
    <>
      <SolidPageHeader
        title="Our Services"
        subtitle="Reliable taxi solutions designed to meet all your travel needs."
      />

      {/* Page content */}
      <TaxiServices/>
    </>
  );
};

export default Services;
