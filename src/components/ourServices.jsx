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
    <div className="mt-5">
      <h1 className="text-4xl font-extrabold text-[#eb0000] text-center uppercase">
        Our Services
      </h1>
      <p className="text-[#efefef] text-xl leading-8 text-center px-[20%] mt-5 second">
        GymFluencer offers 5 essential services to help you achieve your fitness
        go
      </p>

      <div className="flex my-5">
        {activities.map((item, index) => (
          <FitnessPanel key={index} text={item.text} imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  );
}

const FitnessPanel = ({ activity, text, imageUrl }) => (
  <div className="relative w-1/5 h-80 bg-gray-200 flex items-center justify-center">
    <img
      src={imageUrl}
      alt={activity}
      className="absolute inset-0 w-full h-full object-cover "
    />
    <div className="relative z-10 text-white text-center">
      <p className="text-lg font-bold">{text}</p>
    </div>
  </div>
);
