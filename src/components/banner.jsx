import React from "react";
import Trusted_user from "./trusted_user";
import Banner_Marquee from "./banner-marquee";
export default function Banner() {
  return (
    <div className="banner  ">
      <div className="absolute  top-1/4  bottom-1/2 !z-50">
        <Trusted_user />
        <h1 className="text-[#eb0000] text-7xl leading-normal font-black text-center px-20">
          Track Your Fitness Journey
        </h1>
        <p className="text-[#dcdcdc] text-base second leading-6 font-normal text-center px-[14%]">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with our user-friendly interface.
        </p>

        <Banner_Marquee />
      </div>
    </div>
  );
}
