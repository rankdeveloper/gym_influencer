import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Splide's default CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Marquee = () => {
  const content = [
    "FITNESS PLANS",
    "WORKOUT ROUTINES",
    "PROGRESS TRACKING",
    "FITNESS PLANS",
    "WORKOUT ROUTINES",
    "PROGRESS TRACKING",
  ];

  return (
    <div className="overflow-hidden bg-[#f33] p-4">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 0,
          speed: 75000,
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 5,
          gap: "1rem",
        }}
        style={{
          overflow: "hidden",
          background: "#f33",
        }}
      >
        {content.map((item, index) => (
          <SplideSlide key={index}>
            <div className="flex items-center text-center font-normal !text-[12px] whitespace-nowrap leading-3 text-white ">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-white mr-2 !text-[5px]"
              />
              <span className="!text-[12px]">{item}</span>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Marquee;
