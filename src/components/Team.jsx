import React from "react";
import Member1 from "../assests/iimages/Member1.svg";
import Member2 from "../assests/iimages/Member2.svg";
import Member3 from "../assests/iimages/Member3.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
  const members = [
    {
      src: Member1,
      name: "Jessica Arrow",
      role: "Designer",
      socialLink: [
        {
          link: "#",
          icon: <FaTwitter />,
        },
        {
          link: "#",
          icon: <FaFacebook />,
        },
        {
          link: "#",
          icon: <FaInstagram />,
        },
      ],
    },
    {
      src: Member2,
      name: "Kathleen Smith",
      role: "Designer",
      socialLink: [
        {
          link: "#",
          icon: <FaLinkedin />,
        },
        {
          link: "#",
          icon: <FaTwitter />,
        },
        {
          link: "#",
          icon: <FaFacebook />,
        },
        {
          link: "#",
          icon: <FaInstagram />,
        },
      ],
    },
    {
      src: Member3,
      name: "Rebecca Tylor",
      role: "Designer",
      socialLink: [
        {
          link: "#",
          icon: <FaFacebook />,
        },
        {
          link: "#",
          icon: <FaInstagram />,
        },
      ],
    },
  ];
  return (
    <div className="w-full flex f-family-rubik justify-center mb-10">
      <div className="w-9/12">
        <header className="flex flex-wrap justify-center">
          <div className="w-4/5 flex justify-center my-2">
            <h5 className="font-normal border-l-4 yellow-border-color pl-2 py-1 w-36 section-head-bg">
              The Transporters
            </h5>
          </div>
          <div className="w-full flex justify-center">
            <h1 className="font-semibold text-4xl leading-10 mb-2 section head-color">
              Meet Expert Team
            </h1>
          </div>
        </header>
        <main className="grid gap-x-10 grid-cols-3">
          {members.map((member) => (
            <div key={member.name}>
              <div className="bg-yellow-300">
                <img src={member.src} className="w-full" alt="member" />
              </div>
              <div
                style={{ width: "100%" }}
                className="primary-1 px-10 text-white py-7 relative"
              >
                <div className="absolute yellow-bg-gradient right-0 -top-7 flex gap-5 py-4 px-5">
                  {member.socialLink.map((link) => (
                    <a className="text-2xl section-head-color" href={link.link}>
                      {link.icon}
                    </a>
                  ))}
                </div>
                <h1 className="font-medium mb-2 text-xl leading-5">
                  {member.name}
                </h1>
                <p className="f-family-krub font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Team;
