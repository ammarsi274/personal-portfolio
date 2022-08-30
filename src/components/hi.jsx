import React from "react";

const Hi = (props) => {
  return (
    <React.Fragment>
      <div className="relative w-[80vw] h-[100%] p-4">
        <img src={props.url} className="w-[100%] rounded-3xl" alt="" />
        <div className="absolute top-4 block w-[90%] h-[90%] bg-[rgb(255,255,255,0.2)] opacity-0 eas-in-out duration-200 hover:delay-100 hover:opacity-100 rounded-3xl">
          <p className="text-white text-left px-5 py-5 text-3xl font-bold">
            {props.name}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hi;
