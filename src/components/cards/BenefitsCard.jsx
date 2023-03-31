import React from "react";
import Delivery from "../../assests/iimages/Delivery.svg";
import Cost from "../../assests/iimages/Cost.svg";
import BenefitsImg from "../../assests/iimages/BenefitsImg.svg";

const BenefitsCard = () => {
  return (
    <div className="relative pb-16 pt-20 bg-white f-family-rubik -top-36 border gap-2 flex px-16 w-9/12 ">
      <div className="w-2/5">
        <header>
          <div className="w-1/2 my-2 flex">
            <h5 className="font-normal border-l-4 yellow-border-color pl-2 w-20 section-head-bg">
              Why Us
            </h5>
          </div>
          <div>
            <h1 className="font-semibold text-4xl leading-10 mb-2 section head-color">
              We provide full range global logistics solution
            </h1>
          </div>
        </header>
        <main>
          <p className="f-family-krub font-medium leading-6">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <p className="f-family-krub font-medium leading-6 my-5">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </main>
        <footer>
          <div className="flex mb-5 items-center gap-2 text-2xl section-head-color">
            <div>
              <img src={Delivery} alt="delivery" />
            </div>
            <div>
              <p>Delivery on Time</p>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-2 text-2xl section-head-color">
            <div>
              <img src={Cost} alt="cost" />
            </div>
            <div>
              <p>Optimized Travel Cost</p>
            </div>
          </div>
        </footer>
      </div>
      <div className="w-3/5">
        <img src={BenefitsImg} alt="benefits" />
      </div>
    </div>
  );
};

export default BenefitsCard;
