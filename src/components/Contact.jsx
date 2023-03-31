import React from "react";
import Message from "../assests/iimages/Message.svg";
import Call from "../assests/iimages/Call.svg";
import Clock from "../assests/iimages/Clock.svg";
import Sponsor1 from "../assests/iimages/Sponsor1.svg";
import Sponsor2 from "../assests/iimages/Sponsor2.svg";
import Sponsor3 from "../assests/iimages/Sponsor3.svg";
import Sponsor4 from "../assests/iimages/Sponsor4.svg";

const Contact = () => {
  const sponsors = [Sponsor1, Sponsor2, Sponsor3, Sponsor4];
  return (
    <div className="vh-120 mb-4 primary-1 flex justify-center items-center  f-family-rubik text-white">
      <div className="w-9/12 flex flex-wrap">
        <div className="w-1/2">
          <header>
            <div className="w-1/2 my-2 flex">
              <h5 className="font-normal border-l-4 yellow-border-color pl-2 w-20 section-head-bg">
                Contact
              </h5>
            </div>
            <div>
              <h1 className="font-semibold text-4xl leading-10 mb-2">
                We provide full range global logistics solution
              </h1>
            </div>
          </header>
          <main>
            <p className="f-family-krub mb-4 font-medium leading-6">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
          </main>
          <footer>
            <div>
              <ul className="">
                <li className="flex mb-6 items-center gap-3 text-white">
                  <div>
                    <img src={Message} alt="message" />
                  </div>
                  <div>
                    <p>Email</p>
                    <p>contact@logistics.com</p>
                  </div>
                </li>
                <li className="flex mb-6 items-center gap-3 text-white">
                  <div>
                    <img src={Call} alt="call" />
                  </div>
                  <div>
                    <p>Call</p>
                    <p>(00) 112 365 489</p>
                  </div>
                </li>
                <li className="flex mb-6 items-center gap-3 text-white">
                  <div>
                    <img src={Clock} alt="clock" />
                  </div>
                  <div>
                    <p>Mon - Sat 9.00 - 18.00 </p>
                    <p>Sunday Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <div className="w-1/2 flex items-center">
          <form className="flex w-full flex-wrap">
            <div className="grid w-full gap-x-5 grid-cols-2">
              <div className="w-full mb-5">
                <input
                  type="text"
                  className="pl-3 f-family-league-spartan text-xl secondary-2-border w-full rounded-sm py-3 border bg-transparent text-white"
                  placeholder="Your name*"
                />
              </div>
              <div className="w-full  mb-5">
                <input
                  type="text"
                  className="pl-3 f-family-league-spartan text-xl secondary-2-border w-full rounded-sm py-3 border bg-transparent text-white"
                  placeholder="Email*"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  className="pl-3 f-family-league-spartan text-xl secondary-2-border w-full rounded-sm py-3 border bg-transparent text-white"
                  placeholder="Phone Number*"
                />
              </div>
              <div className="w-full mb-5">
                <input
                  type="text"
                  className="pl-3 f-family-league-spartan text-xl secondary-2-border w-full rounded-sm py-3 border bg-transparent text-white"
                  placeholder="City*"
                />
              </div>
            </div>
            <div className="w-full  mb-5">
              <textarea
                type="text"
                rows="7"
                className="pl-3 w-full rounded-sm py-3 border secondary-2-border f-family-league-spartan text-xl bg-transparent text-white"
                placeholder="Your name*"
              ></textarea>
            </div>
            <div>
              <button className="yellow-bg-gradient px-11 py-3.5 f-family-krub font-semibold relative text-black border-white">
                Submit Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-full mt-10 flex">
          {sponsors.map((sponsor) => (
            <div key={sponsor}>
              <img src={sponsor} alt="sponsor" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
