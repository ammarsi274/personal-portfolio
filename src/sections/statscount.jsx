import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const Stats = () => {
  const [counterOn, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <section className="statscount">
        <div className="w-screen min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-white font-bold text-4xl p-10">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={8240} duration={2} delay={0} />
                )}
              </h1>
              <p className="text-sm text-gray-400">HOURS OF WORK</p>
            </div>
            <div className="text-white font-bold text-4xl p-10">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={315} duration={2} delay={0} />
                )}
              </h1>
              <p className="text-sm text-gray-400">PROJECTS DONE</p>
            </div>
            <div className="text-white font-bold text-4xl p-10">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={250} duration={2} delay={0} />
                )}
              </h1>
              <p className="text-sm text-gray-400">SATISFIED CUSTOMERS</p>
            </div>
            <div className="text-white font-bold text-4xl p-10">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={32} duration={2} delay={0} />
                )}
              </h1>
              <p className="text-sm text-gray-400">AWARDS WINNING</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Stats;
