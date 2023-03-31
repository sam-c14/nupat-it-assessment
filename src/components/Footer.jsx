import React from "react";
import FooterImg from "../assests/iimages/FooterImg.svg";
import Logo from "../assests/iimages/Logo.svg";
import Message from "../assests/iimages/Message.svg";
import Call from "../assests/iimages/Call.svg";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 f-family-rubik">
      <div className="">
        <img src={FooterImg} alt="footer-banner" />
      </div>
      <div className="primary-3 flex justify-center  px-20">
        <div className="primary-1 px-10 py-10 w-1/4 mr-10">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-3/5">
          <ul className="w-full py-10 flex gap-x-5">
            <li className="w-1/5 text-3xl font-medium text-white">Pages</li>
            <li className="w-1/5 text-3xl font-medium text-white">Utility</li>
            <li className="w-1/5 text-3xl font-medium text-white">Subscribe</li>
          </ul>
        </div>
      </div>
      <div className="primary-1 flex justify-center  px-20 py-10">
        <div className="px-10 py-10 w-1/4 mr-10">
          <section className="text-white">
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
          </section>
          <section>
            <div className="mt-5 w-full text-white">
              <div className="flex mb-4 items-center gap-3 text-white">
                <div>
                  <img src={Message} className="w-full" alt="message" />
                </div>
                <div>
                  <p>Email</p>
                  <p className="w-40">contact@logistics.com</p>
                </div>
              </div>
              <div className="flex mb-4 items-center gap-3 text-white">
                <div>
                  <img src={Call} className="w-full" alt="message" />
                </div>
                <div>
                  <p>Call</p>
                  <p className="w-40">(00) 112 365 489</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-3/5 f-family-krub">
          <ul className="w-full py-10 flex gap-x-5">
            <li className="w-1/5 text-base font-medium text-white">
              <ul>
                <li className="mb-4">
                  <a href="#"> About Us</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Our Team</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Our Project </a>
                </li>
                <li className="mb-4">
                  <a href="#"> Pricing Contact</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Contact</a>
                </li>
              </ul>
            </li>
            <li className="w-1/5 text-base font-medium text-white">
              <ul>
                <li className="mb-4">
                  <a href="#"> Style Guide</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Changelog</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Licenses</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Protected</a>
                </li>
                <li className="mb-4">
                  <a href="#"> Not Found</a>
                </li>
              </ul>
            </li>
            <li className="w-1/3 text-base font-medium text-white">
              <form>
                <input
                  type="email"
                  placeholder="Email here*"
                  required
                  style={{ borderColor: "#8388a7" }}
                  className="py-4 text-xl w-full bg-transparent border rounded-sm f-family-league-spartan outline-none pl-5 mb-5"
                />
                <div className="flex gap-x-8 items-center">
                  <button className="yellow-bg-gradient px-11 py-3.5 f-family-krub font-semibold relative text-black border-white whitespace-nowrap">
                    Send Now
                  </button>
                  <div className="flex gap-4 text-2xl text-white">
                    <FaLinkedin />
                    <FaTwitter />
                    <BsFacebook />
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ height: "0", border: "0.5px solid #8388a7" }} />
      <div className="py-5 primary-1 px-32">
        <div className="flex text-white justify-between">
          <div className="flex w-2/3 pl-10">
            <p>
              Copyright © TransitFlow | Designed by VictorFlow - Powered by
              Webflow.
            </p>
          </div>
          <div className="w-1/2">
            <ul className="flex secondary-2 gap-x-5">
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Password</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
