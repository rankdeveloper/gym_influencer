import React from "react";
import "./index.css";
import "./App.scss";
// Import the SCSS file globally
import "./variables.scss";

import banner from "./assets/img/banner.jpg";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <div className="banner black-opacity">
        {/* <h1 className="text-[#eb0000] text-7xl leading-normal font-black text-center px-40">
          Track Your Fitness Journey
        </h1>
        <p className="text-[#dcdcdc] text-xl leading-6 font-medium text-center px-52">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with our user-friendly interface.
        </p> */}
      </div>

      <div className="absolute z-50 top-1/4  bottom-1/2 ">
        <h1 className="text-[#eb0000] text-7xl leading-normal font-black text-center px-20">
          Track Your Fitness Journey
        </h1>
        <p className="text-[#dcdcdc] text-base leading-6 font-normal text-center px-52">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with our user-friendly interface.
        </p>
      </div>
    </>
  );
}
