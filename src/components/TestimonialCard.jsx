import React from "react";
import { StarRating } from "./StartRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHorizontalRule } from "@fortawesome/free-solid-svg-icons";

export function TestimonialCard({ name, role, comment, rating, imageUrl }) {
  return (
    <div className="md:max-w-[40rem] max-w-[90%]  md:max-h-64 h-auto md:min-h-64 bg-[#121212] rounded-xl overflow-hidden">
      <div className="flex flex-col  sm:flex-row">
        <div className="md:flex-grow max-w-full  md:max-w-52  md:h-auto  h-[10rem] ">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-rl-lg"
          />
        </div>
        <div className="flex flex-col md:h-auto min-h-[14rem] md:p-8 p-4">
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
