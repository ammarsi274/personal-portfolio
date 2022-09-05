import React from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiPinterestFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="w-screen h-[130px] bg-black flex flex-col md:flex-row items-center justify-center md:justify-between">
          <p className="text-gray-400 text-xl md:mx-16">
            CopyRights Reserved Ammar Shahzad Irfan
          </p>
          <div className="flex flex-row md:mr-16">
            <div className="hover:bg-white rounded-full m-5">
              <RiFacebookFill size={25} color="white" />
            </div>
            <div className="hover:bg-white rounded-full m-5">
              <RiTwitterFill size={25} color="white" />
            </div>
            <div className="hover:bg-white rounded-full m-5">
              <RiLinkedinFill size={25} color="white" />
            </div>
            <div className="hover:bg-white rounded-full m-5">
              <RiPinterestFill size={25} color="white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
