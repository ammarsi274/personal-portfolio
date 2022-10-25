import React from "react";

const Hi = (props) => {
  return (
    <React.Fragment>
      <div className="relative w-[80vw] h-[100%] overflow-hidden my-4 mx-4 block rounded-3xl">
        <img
          src={props.url}
          className="w-[100%] block rounded-3xl scale-100 ease-in-out duration-200 hover:scale-150 hover:brightness-50"
          alt=""
        />
        <div className="absolute top-0 w-[90%]">
          <p className="text-white text-left px-7 py-7 text-3xl font-bold">
            {props.name}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hi;
