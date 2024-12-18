import { useEffect, useRef } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonialData as data } from "../rawData.js";

import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const What_People_Say = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "false",
      focus: "center",
      direction: "ltr",
      height: "auto",
      width: "100%",
      perPage: 2,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 250000,
      interval: 0,
      pauseOnHover: false,

      breakpoints: {
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();
  }, []);
  return (
    <>
      <div className="py-20 testimonials">
        <h2 className="uppercase text-4xl text-bold text-white font-bold text-center pb-10">
          What people say
        </h2>
        <div className="splide relative" ref={splideRef}>
          <div className="splide__track">
            <div className="splide__list">
              {data.map((item, i) => (
                <div className="splide__slide w-full second" key={i}>
                  <TestimonialCard
                    name={item.name}
                    role={item.role}
                    rating={item.rating}
                    comment={item.comment}
                    imageUrl={item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default What_People_Say;
