import React from "react";
import OfferCard from "./cards/OfferCard";

const Offers = () => {
  return (
    <div className="h-screen flex relative items-center justify-center my-10">
      <div className="h-full primary-1 w-1/2"></div>
      <div className="h-full secondary-1 w-1/2"></div>
      <OfferCard />
    </div>
  );
};

export default Offers;
