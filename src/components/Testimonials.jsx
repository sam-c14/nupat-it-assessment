import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import User from "../assests/iimages/User.svg";
import User2 from "../assests/iimages/User2.svg";
import Quotes from "../assests/iimages/Quotes.svg";

const Testimonials = () => {
  return (
    <div className="my-2 flex f-family-rubik justify-center">
      <div className="w-9/12">
        <header>
          <section>
            <div className="w-1/5 my-2 flex">
              <h5 className="font-normal border-l-4 yellow-border-color pl-2 w-1/2 section-head-bg">
                Testimonials
              </h5>
            </div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-4xl leading-10 mb-2 section head-color">
                What Our Customer Say
              </h1>
              <div className="flex gap-2">
                <button className="icon-circle flex justify-center items-center yellow-bg-gradient rounded-full">
                  <FiArrowLeft className="section-head-color text-2xl" />
                </button>
                <button className="icon-circle flex justify-center items-center yellow-bg-gradient rounded-full">
                  <FiArrowRight className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </section>
        </header>
        <main className="grid grid-cols-2 my-10">
          <div className="px-11 my-1 secondary-1 py-16">
            <header className="mb-5">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={User} alt="user" />
                  <div>
                    <h4 className="section-head-color font-medium text-xl">
                      Kathleen Smith
                    </h4>
                    <p className="f-family-krub font-medium">Fuel Company</p>
                  </div>
                </div>

                <div className="quote-circle yellow-bg-gradient flex justify-center items-center rounded-full">
                  <img src={Quotes} alt="quotes" />
                </div>
              </div>
            </header>
            <main className="my-4">
              <p className="f-family-krub leading-6">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </main>
            <footer className="mt-2">
              <div className="flex gap-2">
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
              </div>
            </footer>
          </div>
          <div className="px-11 my-1 primary-1 text-white py-16">
            <header className="mb-5">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={User2} alt="user" />
                  <div>
                    <h4 className=" font-medium text-xl">Kathleen Smith</h4>
                    <p className="f-family-krub font-medium">Fuel Company</p>
                  </div>
                </div>

                <div className="quote-circle yellow-bg-gradient flex justify-center items-center rounded-full">
                  <img src={Quotes} alt="quotes" />
                </div>
              </div>
            </header>
            <main className="my-4">
              <p className="f-family-krub leading-6">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </main>
            <footer className="mt-2">
              <div className="flex gap-2">
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
                <BsStarFill className="text-yellow-400 text-2xl" />
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Testimonials;
