import React from "react";
import { Features } from "./benefits-cards";
import { features } from "../rawData";
function Benefits() {
  return (
    <div className=" bg-black text-white p-6 md:px-12 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#eb0000] text-2xl md:text-5xl font-bold text-center md:px-12 xl:px-12">
          Discover GymFluencer Benefits
        </h2>
        <p className="text-[#dcdcdc] text-base pt-4 md:pt-12 xl:pt-12 text-center md:px-32 xl:px-32 second">
          Unlock your full potential with GymFluencer your personal fitness
          partner for progress and motivation
        </p>
        <div className="flex flex-col md:flex-row xl:flex items-center justify-center gap-12 py-12">
          <Features features={features} />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
