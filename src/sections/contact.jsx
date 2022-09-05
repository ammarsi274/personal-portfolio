import React from "react";
import ResumeBtn from "../components/resumebtn";
const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="w-screen min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center drop-shadow-lg">
            <div className="text-4xl text-white font-bold">Contact Me</div>
            <div className="flex flex-row">
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[2px] border-black"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
            </div>
            <form className="w-[80vw] flex flex-col md:items-center">
              <div className="flex flex-col items-center justify-between md:flex-row md:w-[60vw]">
                <input
                  type="text"
                  className="border my-1 w-full bg-transparent h-[45px] md:w-[30%] rounded-md px-2 py-1"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="border my-1 w-full bg-transparent  h-[45px] md:w-[30%] rounded-md px-2 py-1"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="border my-1 w-full bg-transparent h-[45px] md:w-[30%] rounded-md px-2 py-1"
                  placeholder="Your Phone"
                />
              </div>
              <div className="flex w-[80vw] items-center justify-center md:w-[60vw]">
                <textarea
                  rows="6"
                  cols="60"
                  name="text"
                  className="border w-full my-1 bg-transparent h-[200px] md:w-[100%] rounded-md px-2 py-1"
                  placeholder="Your Message"
                />
              </div>
              <div>
                <ResumeBtn name={"Send Message"} />
              </div>
            </form>
            <div className="m-16 text-white text-xl font-bold">
              <p>Email Me</p>
              <p className="text-gray-400 text-lg font-normal">
                contact@kyrosnoriaki.com
              </p>
              <p className="mt-5">Call Me</p>
              <p className="text-gray-400 text-lg font-normal">
                +1 700 333 92 96
              </p>
              <p className="mt-5">Address</p>
              <p className="text-gray-400 text-lg font-normal">
                Collins Street West, Louisiana, Bayerfurt, USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
