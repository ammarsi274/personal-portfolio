import React from "react";
import Boy from "../images/pngegg.png";
const About = () => {
  return (
    <div>
      <section className="about drop-shadow-lg">
        <div className="w-screen flex-row flex items-center justify-center">
          <div className="flex h-[100%]  items-center mx-10 drop-shadow-lg">
            <img src={Boy} className="max-h-[80vh]" />
          </div>
          <div className="text-left text-gray-400 mx-10">
            <h1 className="text-white font-bold text-4xl mb-5">About Me</h1>
            <p className="max-w-[50vw] text-lg">
              In quis amet ex veniam in irure est culpa veniam velit fugiat
              cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt
              commodo voluptate ullamco magna nulla amet. Lorem ipsum officia
              veniam enim sit culpa velit proident enim ea officia aute non in
              mollit culpa anim magna sit veniam irure eiusmod.
            </p>

            <div className="my-2 mt-5">
              <div className="flex flex-row w-[80%] items-center justify-between my-1">
                <h1 className="text-white">HTML</h1>
                <div className="bg-white text-black w-[40px] h-[3vh] text-center rounded-sm">
                  <h2 className="text-xs py-[1px]">80%</h2>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[6px] rounded-md">
                <div className="bg-black h-[6px] w-[80%] rounded-md"></div>
              </div>
              <div className="flex flex-row w-[62%] items-center justify-between my-1">
                <h1 className="text-white">JAVASCRIPT</h1>
                <div className="bg-white text-black w-[40px] h-[3vh] text-center rounded-sm">
                  <h2 className="text-xs py-[1px]">62%</h2>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[6px] rounded-md">
                <div className="bg-black h-[6px] w-[62%] rounded-md"></div>
              </div>
              <div className="flex flex-row w-[70%] items-center justify-between my-1">
                <h1 className="text-white">CSS</h1>
                <div className="bg-white text-black w-[40px] h-[3vh] text-center rounded-sm">
                  <h2 className="text-xs py-[1px]">70%</h2>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[6px] rounded-md">
                <div className="bg-black h-[6px] w-[70%] rounded-md"></div>
              </div>
              <div className="flex flex-row w-[90%] items-center justify-between my-1">
                <h1 className="text-white">REACT</h1>
                <div className="bg-white text-black w-[40px] h-[3vh] text-center rounded-sm">
                  <h2 className="text-xs py-[1px]">90%</h2>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[6px] rounded-md">
                <div className="bg-black h-[6px] w-[90%] rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
