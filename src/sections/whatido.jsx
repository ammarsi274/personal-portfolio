import React from "react";
import { FaReact } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { GoDeviceCamera } from "react-icons/go";
import Hi from "../components/hi";
const WhatIDo = () => {
  return (
    <div>
      <section className="whatido mt-20">
        <div className="w-screen flex items-centre justify-center">
          <div className="items-center justify-center drop-shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl text-white font-bold">What I Do</div>
              <div className="flex flex-row">
                <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
                <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[2px] border-black"></div>
                <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
              </div>
            </div>
            <div className="w-screen h-[20vh]"></div>
            <div className="flex flex-col md:flex-row mx-5 px-5">
              <div className="border-l-2 border-white text-left p-5">
                <div className="flex flex-row mb-4">
                  <FaReact size={40} />
                  <h1 className="text-3xl text-white ml-2">Branding</h1>
                </div>
                <p className="text-gray-400 text-lg">
                  Ex velit cupidatat magna voluptate deserunt quis et dolor
                  adipisicing elit culpa ad exercitation proident irure deserunt
                  irure.
                </p>
              </div>
              <div className="border-l-2 border-white text-left p-5">
                <div className="flex flex-row mb-4">
                  <RiToolsFill size={40} />
                  <h1 className="text-3xl text-white ml-2">Development</h1>
                </div>
                <p className="text-gray-400 text-lg">
                  Ex velit cupidatat magna voluptate deserunt quis et dolor
                  adipisicing elit culpa ad exercitation proident irure deserunt
                  irure.
                </p>
              </div>
              <div className="border-l-2 border-white text-left p-5">
                <div className="flex flex-row mb-4">
                  <GoDeviceCamera size={40} />
                  <h1 className="text-3xl text-white ml-2">Photography</h1>
                </div>
                <p className="text-gray-400 text-lg">
                  Ex velit cupidatat magna voluptate deserunt quis et dolor
                  adipisicing elit culpa ad exercitation proident irure deserunt
                  irure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIDo;
