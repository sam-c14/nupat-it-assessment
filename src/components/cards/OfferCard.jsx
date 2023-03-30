import React from "react";
import OfferImg from "../../assests/iimages/OfferImg.svg";
import BoxIcon from "../../assests/iimages/BoxIcon.svg";
import GlobeIcon from "../../assests/iimages/GlobeIcon.svg";
import ClockIcon from "../../assests/iimages/ClockIcon.svg";
import ShipIcon from "../../assests/iimages/ShipIcon.svg";
import HeadsetIcon from "../../assests/iimages/HeadsetIcon.svg";
import PricingIcon from "../../assests/iimages/PricingIcon.svg";

const OfferCard = () => {
  const footerIcons = [
    {
      src: BoxIcon,
      text: "Safe Package",
    },
    {
      src: GlobeIcon,
      text: "Global Tracking",
    },
    {
      src: ClockIcon,
      text: "In Time Delivery",
    },
    {
      src: ShipIcon,
      text: "Ship Everyware",
    },
    {
      src: HeadsetIcon,
      text: "24/7 Support",
    },
    {
      src: PricingIcon,
      text: "Transparent Pricing",
    },
  ];

  return (
    <div className="absolute bg-transparent px-2 w-11/12 f-family-rubik">
      <div className="flex ">
        <div className="w-3/5">
          <img src={OfferImg} alt="flight-offer" />
        </div>
        <div className="w-2/5 pl-10">
          <header>
            <div className="w-1/2 my-2 flex">
              <h5 className="font-normal border-l-4 yellow-border-color pl-2 w-1/2 section-head-bg">
                Why Choose
              </h5>
            </div>
            <div>
              <h1 className="font-semibold text-4xl leading-10 mb-2 section head-color">
                We create opportunity to reach potential
              </h1>
            </div>
          </header>
          <main>
            <p className="f-family-krub font-medium leading-6">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="f-family-krub font-medium leading-6 my-5">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </main>
          <footer className="grid grid-cols-2 gap-y-5">
            {footerIcons.map((icon) => (
              <div className="flex items-center gap-2">
                <div className="icon-circle yellow-bg-gradient flex justify-center items-center p-1 rounded-full">
                  <img src={icon.src} alt="box" />
                </div>
                <p className="font-normal text-xl section-head-color">
                  {icon.text}
                </p>
              </div>
            ))}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
