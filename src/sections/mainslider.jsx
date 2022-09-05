import { Button } from "bootstrap";
import React from "react";
import Typed from "react-typed";
import Boy from "../images/pngegg.png";
import ResumeBtn from "../components/resumebtn";
const MainSlider = () => {
  return (
    <div className="text-white">
      <section className="mainslider">
        <div className="translate-y-[-5] duration-300">
          <div className="w-screen flex items-centre">
            <div className="text-left mx-[10%] mt-[140px] flex-col drop-shadow-lg">
              <p className="tracking-[0.4em]">WELCOME TO MY WEBSITE</p>
              <h1 className="mt-5 text-5xl font-bold">
                Hi, I am <span className="text-black">Ammar Shahzad Irfan</span>
                ,
                <br />a{" "}
                <span>
                  <Typed
                    strings={[
                      "Web Designer.",
                      "UI/UX Designer.",
                      "React Developer.",
                    ]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                  />
                </span>
              </h1>

              <p className="mt-5 w-[50vw] text-gray-400 text-lg">
                I am a website designer from Lousiana, with a strong focus in
                UI/UX design. I love to get new experiences and always learn
                from my surroundings.I looking forward to any opportunities and
                challenges.
              </p>
              <div>
                <ResumeBtn name={"My Resume"} />
              </div>
            </div>
            <div className="flex h-[100vh]  items-center mx-10 drop-shadow-lg">
              <img src={Boy} className="max-h-[80%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSlider;
