import React from "react";
import Warehouse from "../assests/iimages/Warehouse.svg";
import Transport from "../assests/iimages/Transport.svg";
import Shipping from "../assests/iimages/Shipping.svg";
import Flight from "../assests/iimages/Flight.svg";

const Services = () => {
  return (
    <div className="f-family-rubik py-20 flex">
      <header className="w-2/5 px-10">
        <div className="w-8/12 my-2 flex pl-24">
          <h5 className="font-normal border-l-4 yellow-border-color pl-2 w-1/2 section-head-bg">
            What we do
          </h5>
        </div>
        <div className="flex my-2 justify-center">
          <h1 className="font-semibold section-head-color leading-10 text-4xl w-8/12">
            Safe & Reliable Cargo Solutions
          </h1>
        </div>
      </header>
      <main className="grid grid-cols-2 w-3/5 place-items-start gap-y-12">
        <div className="flex">
          <div className="border-r-2 w-1/5 pr-5 mr-5 border-gray-300">
            <img src={Transport} alt="transport-service" />
          </div>
          <div>
            <header className="my-2">
              <h4 className="text-2xl font-normal">Sea Transport Services</h4>
            </header>
            <main className="w-3/5">
              <p className="f-family-krub p-color font-medium leading-6">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </main>
          </div>
        </div>
        <div className="flex">
          <div className="border-r-2 w-1/5 pr-5 mr-5 border-gray-300">
            <img src={Warehouse} alt="warehouse-service" />
          </div>
          <div>
            <header className="my-2">
              <h4 className="text-2xl font-normal">Sea Warehousing Services</h4>
            </header>
            <main className="w-3/5">
              <p className="f-family-krub p-color font-medium leading-6">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </main>
          </div>
        </div>
        <div className="flex">
          <div className="border-r-2 w-1/5 pr-5 mr-5 border-gray-300">
            <img src={Flight} alt="transport-service" />
          </div>
          <div>
            <header className="my-2">
              <h4 className="text-2xl font-normal"> Air Fright Services</h4>
            </header>
            <main className="w-3/5">
              <p className="f-family-krub p-color font-medium leading-6">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </main>
          </div>
        </div>
        <div className="flex">
          <div className="border-r-2 w-1/5 pr-5 mr-5 border-gray-300">
            <img src={Shipping} alt="transport-service" />
          </div>
          <div>
            <header className="my-2">
              <h4 className="text-2xl font-normal">Local Shipping Services</h4>
            </header>
            <main className="w-3/5">
              <p className="f-family-krub p-color font-medium leading-6">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
