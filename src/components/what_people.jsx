import { useEffect, useRef } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonialData as data } from "../rawData.js";

import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { motion } from "framer-motion";

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
        430: { perPage: 1, speed: 20000 },
      },
    });

    splide.mount();

    return () => splide.destroy();
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          staggerChildren: 0.5,
          delayChildren: 0.5,
        }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        className="py-20 testimonials"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, stiffness: 100 }}
          className="uppercase text-4xl text-bold text-white font-bold text-center pb-10"
        >
          What people say
        </motion.h2>
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
      </motion.div>
    </>
  );
};

export default What_People_Say;
