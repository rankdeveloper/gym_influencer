import React from "react";
import "@splidejs/splide/css";

const Banner_Marquee = () => {
  const Ucontent = [
    "/ Transformation ",
    "/ Motivation",
    "/ Progress",
    "/ Fitness",
    "/ Transformation",
  ];

  const bcontent = [
    "/ Work",
    "/ Progress",
    "/ Strength",
    "/ Community",
    "/ Work",
  ];

  return (
    <div className="overflow-hidden bg-transparent py-5 mx-auto bottom-0 w-[90%]">
      <div className="flex items-center gap-8 animate-marquee">
        {Ucontent.concat(Ucontent).map((item, index) => (
          <div
            key={index}
            className="whitespace-nowrap text-white text-3xl md:text-5xl"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-8 animate-marqueeRight">
        {bcontent.concat(bcontent).map((item, index) => (
          <div
            key={index}
            className="whitespace-nowrap text-[#f33] text-3xl md:text-5xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner_Marquee;
