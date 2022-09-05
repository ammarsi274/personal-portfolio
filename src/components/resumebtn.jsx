import React, { Component, useState } from "react";

const ResumeBtn = (props) => {
  return (
    <button className="inline-block mt-5 px-6 py-2 bg-white text-[#2f4f4f] font-bold text-sm rounded-lg shadow-md hover:bg-black hover:shadow-lg active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
      {props.name}
    </button>
  );
};

export default ResumeBtn;
