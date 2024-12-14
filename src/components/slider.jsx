import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Vertical_Slider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      direction: "ttb", // Top to Bottom for vertical
      height: "300px",
      width: "400px",
      perPage: 1,
      gap: "1rem",
      arrows: false,
      pagination: false,
      autoplay: true, // Enable autoplay
      interval: 1500, // Time between slides (2 seconds)
      speed: 800, // Transition speed between slides
      pauseOnHover: false, // Pause autoplay on hover
      breakpoints: {
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          {[...Array(6)].map((_, index) => (
            <li key={index} className="splide__slide  border-2 border-red-500">
              <div className="p-6 bg-gray-800 text-white rounded-lg text-center">
                <h3 className="text-xl font-bold">Slide {index + 1}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Vertical_Slider;
