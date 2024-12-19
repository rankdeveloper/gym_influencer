import React from "react";
import Vertical_Slider from "./slider";

export default function Personalized_Hub() {
  return (
    <div className="personalized_hub flex flex-col sm:flex-row gap-10 justify-between items-center px-14 py-10">
      <div className="md:w-1/2 w-full px-0 md:px-4">
        <h2 className="text-2xl md:text-4xl leading-10 font-extrabold text-[#eb0000] text-center md:text-left uppercase">
          Your Personalized Fitness Hub
        </h2>

        <div className="flex flex-col mt-10 gap-6 text-base text-[#efefef] leading-7 font-normal second">
          <p>
            Personalized workout routines tailored to your goals and preferences
          </p>

          <p>
            Get expert guidance with virtual coaching sessions, available
            anytime, anywhere.
          </p>

          <p>
            Track your fitness journey with detailed analytics, goal setting,
            and achievements.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Vertical_Slider />
      </div>
    </div>
  );
}
