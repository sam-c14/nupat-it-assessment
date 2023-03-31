import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg pt-5 f-family-rubik w-full flex items-center">
      <section className="px-10 w-2/5">
        <header>
          <div className="border-l-8 w-72 mb-2 yellow-border-color bg-5-blue text-white py-1 px-2 font-normal">
            <p>Logistics & Supply Chain Solutions</p>
          </div>
        </header>
        <main>
          <h1 className="text-6xl leading-20 text-white font-bold">
            Your Gateway to any Destination in the World
          </h1>
          <p className="font-medium mt-2 text-white leading-6 f-family-krub">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
        </main>
        <footer className="mt-5">
          <button className="yellow-bg-gradient px-11 py-3.5 .f-family-krub font-semibold relative border-skew border-white">
            Explore More
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Hero;
