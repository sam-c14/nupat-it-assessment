import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="py-5 f-family-krub  bg-black bg-opacity-5 text-white absolute flex w-full">
      <div className="w-1/2 ">
        <ul className="flex w-full items-center justify-center gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <hr className="hr-nav" />
          <li>
            <a href="#">About</a>
          </li>
          <hr className="hr-nav" />
          <li>
            <a href="#" className="flex items-center">
              Pages
              <span className="pl-2">
                <FaAngleDown />
              </span>
            </a>
          </li>
          <hr className="hr-nav" />
          <li>
            <a href="#">Projects</a>
          </li>
          <hr className="hr-nav" />
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="w-1/2">
        <ul className="flex gap-5">
          <li>
            <a href="#">
              <FaInstagram className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-8 py-5 font-semibold text-black bg-white capitalize ml-5 "
            >
              request quote
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
