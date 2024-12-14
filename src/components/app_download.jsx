import React from "react";
import other from "../assets/img/icon2.svg";
import playstore from "../assets/img/icon3.svg";
export default function app_download() {
  return (
    <div className="flex justify-center mt-14 items-center gap-2">
      <div className="text-[#797b85] text-sm flex gap-1">
        <img src={info} alt="info" className="h-5 w-5" />
        <span>App Available For </span>
      </div>
      <div className="flex justify-center items-center gap-3 bg-[#0e0e10] px-3 py-2  rounded-3xl border-gray">
        <img src={playstore} alt="playstore" className="h-5 w-5" />
        <hr className="h-6 w-[1px] bg-[#1d1d20] text-[#1d1d20] border-t-0" />
        <img src={other} alt="other" className="h-5 w-5" />
      </div>
    </div>
  );
}
