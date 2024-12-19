import React from "react";
import track from "../assets/img/track.avif";
import train from "../assets/img/train.avif";
import challenge from "../assets/img/challenge.avif";
import analyze from "../assets/img/analyzie.avif";
import connect from "../assets/img/connect.avif";
export default function Services() {
  const activities = [
    { activity: "Rowing", text: "TRACK", imageUrl: track },
    {
      activity: "Weight Lifting",
      text: "ANALYZE",
      imageUrl: analyze,
    },
    { activity: "Yoga", text: "TRAIN", imageUrl: train },
    {
      activity: "Aerobics",
      text: "CONNECT",
      imageUrl: connect,
    },
    {
      activity: "Swimming",
      text: "CHALLENGE",
      imageUrl: challenge,
    },
  ];
  return (
    <div className="py-10 md:py-5">
      <h1 className="text-2xl md:text-4xl font-extrabold text-[#eb0000] text-center uppercase">
        Our Services
      </h1>
      <p className="text-[#efefef] text-base md:text-xl leading-8 text-center px-auto md:px-[20%] py-5 second">
        GymFluencer offers 5 essential services to help you achieve your fitness
        goals with ease and flexibility. go
      </p>

      <div className="flex flex-col sm:flex-row my-5">
        {activities.map((item, index) => (
          <FitnessPanel key={index} text={item.text} imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  );
}

const FitnessPanel = ({ activity, text, imageUrl }) => (
  <div className="relative w-full md:w-1/5 md:h-80 h-52 bg-gray-200 items-center justify-center">
    <img
      src={imageUrl}
      alt={activity}
      className="absolute md:inset-0 w-full h-full object-cover "
    />
    <div className="relative z-10 text-white text-center py-24 md:py-0">
      <p className="text-lg font-bold">{text}</p>
    </div>
  </div>
);
