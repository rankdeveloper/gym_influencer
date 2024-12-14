import React from "react";

export default function Misson() {
  return (
    <div className="p-10 px-[5.5rem]">
      <h1 className="text-[#eb0000] text-6xl leading-normal font-black text-center px-20">
        Your Fitness.<br></br> Our Mission.
      </h1>
      <p className="text-xl text-[#efefef] leading-8 items-center mb-20 text-center">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </p>

      <div className="counter flex justify-between items-center gap-3 text-white">
        <div className="counter-item text-center border-r border-[#1d1d20] px-4">
          <h2 className="text-5xl mb-5">100k+</h2>
          <p className="text-sm text-[#797b85]">
            Workouts logged and progress tracked every month
          </p>
        </div>
        {/* <hr className="h-full w-[1px] bg-white " /> */}

        <div className="counter-item text-center border-r border-[#1d1d20] px-4">
          <h2 className="text-5xl mb-5">500k+</h2>
          <p className="text-sm text-[#797b85]">
            Fitness enthusiasts connected through our platform
          </p>
        </div>
        {/* <hr className="h-full w-[1px] bg-white " /> */}
        <div className="counter-item text-center px-4">
          <h2 className="text-5xl mb-5">10+</h2>
          <p className="text-sm text-[#797b85]">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>
    </div>
  );
}
