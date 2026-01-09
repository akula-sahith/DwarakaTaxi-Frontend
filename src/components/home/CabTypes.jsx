import React from 'react';
import CabTypesPricingHeader from "./TagLine";
import CarRentalComponent from "../../pages/components/TariffComponent";

const TariffSection = () => {
  return (
    <div className="w-full">
      <CabTypesPricingHeader />
      <CarRentalComponent />
    </div>
  );
};

export default TariffSection;