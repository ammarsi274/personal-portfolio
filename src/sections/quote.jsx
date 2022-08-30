import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
const Quote = () => {
  return (
    <div className="mt-0">
      <section className="quote">
        <div className="w-screen min-h-screen flex items-center justify-center text-left">
          <div className="w-[70vw] flex flex-col drop-shadow-lg">
            <div>
              <RiDoubleQuotesR size={120} />
            </div>
            <p className="text-4xl text-white">
              Do more than is required. What is the distance between someone who
              achieves their goals consistently and those who spend their lives
              and careers merely following? The extra mile.
            </p>
            <div className="border-l border-white mt-4">
              <p className="text-gray-400 pl-4">Kyros Noriaki</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
