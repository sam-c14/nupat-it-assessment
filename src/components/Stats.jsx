import React from "react";
import Pattern from "../assests/iimages/Pattern.svg";

const Stats = () => {
  return (
    <div className=" pb-5 f-family-rubik flex">
      <div className="flex justify-center w-full">
        <div className="flex py-8 px-20 border border-l-0 items-center gap-4">
          <div>
            <h1 className="text-5xl font-semibold section-head-color">1294</h1>
          </div>
          <div>
            <img src={Pattern} alt="pattern" />
          </div>
          <div>
            <p className="f-family-league-spartan font-normal text-xl section-head-color">
              Delivered Packages
            </p>
          </div>
        </div>
        <div className="flex py-8 px-20 border border-r-0 items-center gap-4">
          <div>
            <h1 className="text-5xl font-semibold section-head-color">3594</h1>
          </div>
          <div>
            <img src={Pattern} alt="pattern" />
          </div>
          <div>
            <p className="f-family-league-spartan font-normal text-xl section-head-color">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
