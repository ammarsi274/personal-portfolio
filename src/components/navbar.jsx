import React, { Component, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SideMenu from "./sidemenu";

//import { useState } from 'react';

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="text-white flex z-10 bg-black items-center justify-between h-[70px] w-full fixed drop-shadow-lg mx-auto px-3">
        <h1 className="text-2xl font-bold flex ">My WebSite</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Not Home</li>
          <li className="p-4">Home coming</li>
          <li className="p-4">Far from home</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <SideMenu navVal={nav} />
    </div>
  );
};

export default NavBar;
