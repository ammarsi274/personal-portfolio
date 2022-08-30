import React from "react";

const Hi = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Hi;
