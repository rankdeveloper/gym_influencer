import React from "react";
import { StarRating } from "./StartRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHorizontalRule } from "@fortawesome/free-solid-svg-icons";

export function TestimonialCard({ name, role, comment, rating, imageUrl }) {
  return (
    <div className="max-w-[40rem] max-h-64 min-h-64 bg-[#121212] rounded-xl overflow-hidden">
      <div className="flex">
        <div className="flex-grow max-w-52  h-auto ">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-rl-lg"
          />
        </div>
        <div className="flex flex-col flex-grow p-8">
          <StarRating rating={rating} />
          <p className="mt-4 text-white text-sm  leading-7">{comment}</p>
          <div className="mt-4">
            <p className="text-white font-semibold marker:text-sm mt-2">
              {name}
            </p>
            <p className="text-gray-400 text-sm flex items-center ">
              {" "}
              <span>__</span> <span>{role}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
