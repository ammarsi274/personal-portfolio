import React from "react";
import Hi from "../components/hi";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio">
        <div className="w-screen min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl text-white font-bold">Portfolio</div>
            <div className="flex flex-row">
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[2px] border-black"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
            </div>
            <div className="relative w-[80vw] h-[100%]">
              <img
                src={require("../images/AccIcon.jpg")}
                className="flex w-[100%] rounded-3xl"
                alt=""
              />
              <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgb(255,255,255,0.1)] opacity-0 eas-in-out duration-200 hover:opacity-100 rounded-3xl">
                <p className="text-white text-left px-5 py-5 text-3xl font-bold">
                  Skeliton
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
