import React from "react";
const SideMenu = (props) => {
  return (
    <div
      className={
        !props.navVal
          ? "flex fixed z-10 left-0 top-0 h-full w-[50%] border-r border-r-teal-700 bg-teal-900 bg-opacity-95 ease-in-out duration-500"
          : "flex fixed z-10 left-[-100%] ease-in-out duration-500 h-full w-[50%]"
      }
    >
      <ul className="text-white pt-20 uppercase text-left w-[100%] mx-3">
        <li className="p-4 border-b border-white">Home</li>
        <li className="p-4 border-b border-white">Not Home</li>
        <li className="p-4 border-b border-white">Home coming</li>
        <li className="p-4 ">Far from home</li>
      </ul>
    </div>
  );
};

export default SideMenu;
