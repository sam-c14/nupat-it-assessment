import React from "react";
import BlogImg1 from "../assests/iimages/BlogImg1.svg";
import BlogImg2 from "../assests/iimages/BlogImg2.svg";
import BlogImg3 from "../assests/iimages/BlogImg3.svg";
import CalendarIcon from "../assests/iimages/CalendarIcon.svg";

const Blog = () => {
  const news = [
    {
      src: BlogImg1,
      icon: CalendarIcon,
      day: "08",
      month: "September",
      header: "Inland freight a worthy solution for your business",
      paragraph:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
    {
      src: BlogImg2,
      icon: CalendarIcon,
      day: "12",
      month: "September",
      header: "How technology can help redraw the supply chain map",
      paragraph:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
    {
      src: BlogImg3,
      icon: CalendarIcon,
      day: "25",
      month: "September",
      header: "Five things you should have ready for your broker",
      paragraph:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solutions",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
  ];
  return (
    <div className="my-4 f-family-rubik">
      <header className="flex flex-wrap justify-center">
        <div className="w-1/3 flex justify-center my-2">
          <h5 className="font-normal border-l-4 yellow-border-color pl-2 w-1/6 section-head-bg">
            Our Blog
          </h5>
        </div>
        <div className="w-full flex justify-center">
          <h1 className="font-semibold text-4xl leading-10 mb-2 section head-color">
            Our Latest News
          </h1>
        </div>
      </header>
      <main className="flex my-10 flex-wrap justify-center">
        {news.map((info) => (
          <div className="w-3/5">
            <div className="border border-l-0 border-r-0 py-7 flex">
              <div className="border-r-2 pr-2 w-3/5 flex gap-10">
                <div
                  className="h-72 w-9/12"
                  style={{
                    background: `url(${info.src}) no-repeat center/cover`,
                  }}
                ></div>
                <div>
                  <div className="pl-2">
                    <img src={info.icon} alt="calendar-icon" />
                  </div>
                  <h1 className="section-head-color font-semibold pl-4 text-3xl">
                    {info.day}
                  </h1>
                  <p className="f-family-krub primary-2 text-center font-normal">
                    {info.month}
                  </p>
                </div>
              </div>
              <div className="pl-5 w-2/5">
                <header>
                  <h1 className="text-2xl font-normal leading-6 mb-4">
                    {info.header}
                  </h1>
                </header>
                <main>
                  <p className="f-family-krub mt-2 mb-5">{info.paragraph}</p>
                </main>
                <footer>
                  <ul className="pl-5">
                    {info.list.map((item) => (
                      <li className="mb-2 list-disc">{item}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </main>
      <footer>
        <div className="flex justify-center">
          <button className="primary-1 px-11 py-6 f-family-krub font-semibold relative text-white border-white">
            More Blog
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
