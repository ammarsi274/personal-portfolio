import React from "react";
const Sect = (props) => {
  return (
    <div>
      <div className="w-[100%] bg-gradient-to-r from-white rounded-l-full flex flex-row items-center">
        <div className="left-0 bg-black w-[50px] rounded-full">
          <p className="p-3 text-white">{props.sNo}</p>
        </div>
        <p className="px-3 font-bold">{props.year}</p>
      </div>
      <div className="px-6">
        <div className="flex border-l border-white w-[100%] p-10 text-left">
          <p className="text-gray-400 text-lg">
            <h1 className="text-white text-2xl font-bold">{props.head}</h1>
            <h2 className="text-black text-lg">{props.subHead}</h2>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sect;
