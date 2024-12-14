import React from "react";
import avatar1 from "../assets/img/p_icon1.png";
export default function Trusted_user() {
  return (
    <div className="flex justify-center items-center">
      <div class="flex items-center bg-[#171518] text-white px-4 py-2 rounded-full max-w-fit space-x-3 border-solid border border-[#171518]">
        <div class="flex">
          <img
            src={avatar1}
            alt="User 1"
            class="w-8 h-8 rounded-full object-cover border-2 border-gray-900"
          />
          <img
            src={avatar1}
            alt="User 2"
            class="-ml-3 w-8 h-8 rounded-full object-cover border-2 border-gray-900"
          />
          <img
            src={avatar1}
            alt="User 3"
            class="-ml-3 w-8 h-8 rounded-full object-cover border-2 border-gray-900"
          />
        </div>

        <span class="text-sm ">Trusted by 3+ million users</span>
      </div>
    </div>
  );
}
