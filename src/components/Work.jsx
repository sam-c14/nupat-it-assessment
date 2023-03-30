import React from "react";
import WorkSlider from "./WorkSlider";

const Work = () => {
  return (
    <div className="w-full flex justify-center flex-wrap f-family-rubik my-10">
      <header className="w-full text-center">
        <h1 className="section-head-color text-4xl font-semibold">
          Transporting Across The World
        </h1>
      </header>
      <main className="w-full relative mt-56">
        <WorkSlider />
      </main>
      <div className="yellow-bg-gradient mt-5 vh-60 w-full"></div>
    </div>
  );
};

export default Work;
