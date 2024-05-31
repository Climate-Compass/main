import React from "react";

type heroType = {};

const Hero: React.FC<heroType> = () => {
  return (
    <section className="grid grid-cols-[1fr 0.5fr]">
      <div className="flex flex-col items-start">
        <h1 className="text-[56px] font-bold">CLIMATE COMPASS</h1>
        <p className=" font-normal text-[16px]">Climate Compass is a gamified prediction market platform designed to empower individuals and communities to address climate change.</p>
      </div>
      <div></div>
    </section>
  );
};
export default Hero;
