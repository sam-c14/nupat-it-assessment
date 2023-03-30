import React from "react";
import Logo from "../assests/iimages/Logo.svg";
import Message from "../assests/iimages/Message.svg";
import Call from "../assests/iimages/Call.svg";
import Clock from "../assests/iimages/Clock.svg";

const AppHeader = () => {
  return (
    <div
      className="w-full f-family-krub text-sm font-medium"
      style={{ height: "2%", background: "#091242" }}
    >
      <div className="flex py-5 items-center">
        <div className="w-2/5 flex justify-center">
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <ul className="flex ">
            <li className="flex items-center gap-3 text-white">
              <div>
                <img src={Clock} alt="clock" />
              </div>
              <div>
                <p>Mon - Sat 9.00 - 18.00 </p>
                <p>Sunday Closed</p>
              </div>
            </li>
            <li className="flex items-center gap-3 text-white">
              <div>
                <img src={Message} alt="message" />
              </div>
              <div>
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </li>
            <li className="flex items-center gap-3 text-white">
              <div>
                <img src={Call} alt="call" />
              </div>
              <div>
                <p>Call</p>
                <p>(00) 112 365 489</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
