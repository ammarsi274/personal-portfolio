import React from "react";
import Hi from "../components/hi";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio">
        <div className="w-screen min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center drop-shadow-lg">
            <div className="text-4xl text-white font-bold">Portfolio</div>
            <div className="flex flex-row">
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[2px] border-black"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
            </div>
            <div className="w-[80vw] flex flex-col md:flex-row">
              <Hi url={require("../images/AccIcon.jpg")} name="Skeliton" />
              <Hi url={require("../images/titanssqr.jpg")} name="computer" />
              <Hi
                url={require("../images/i0w3ubal6o651.png")}
                name="computer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
