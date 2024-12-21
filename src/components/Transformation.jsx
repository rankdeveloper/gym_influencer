import React, { useEffect, useRef } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { personData } from "../rawData.js";
// import "@splidejs/splide/dist/css/splide.min.css";
import { motion } from "framer-motion";

export default function Transformation() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 3000,
        speed: 1000,
        arrows: true,
        pagination: true,
        drag: true,
      }}
      className="overflow-hidden"
    >
      {personData.map((item, i) => (
        <SplideSlide key={i}>
          <div className="splide__slide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                staggerChildren: 0.5,
                delayChildren: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="py-10 second"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                className="text-3xl leading-10 text-[#eb0000] font-black break-words px-[20%] text-center mb-12 uppercase"
              >
                Transformations made
                <br /> possible with GymFluencer
              </motion.h1>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-20">
                {/* Left Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  className="w-full md:w-1/2 tranformation-left pl-8 py-8"
                >
                  <div className="flex gap-16 items-center">
                    <div className="name flex flex-col text-white text-base leading-9 font-black border-l-[5px] border-[#eb0000] px-2">
                      <h2>Name</h2>
                      <h2>Age</h2>
                    </div>
                    <div className="name-text flex flex-col text-white text-base leading-9 font-black">
                      <h2>{item.name}</h2>
                      <h2>{item.age}</h2>
                    </div>
                  </div>

                  <table className="text-white text-base leading-9 font-black mt-8 border-spacing-y-4 border-separate">
                    <tbody>
                      <tr>
                        <td className="min-w-20">
                          <button className="border-[1.5px] border-white px-2 text-sm font-normal">
                            {item.weeks} Weeks
                          </button>
                        </td>
                        <td className="min-w-10"></td>
                        <td className="min-w-20">
                          <h2 className="text-sm font-normal">Before</h2>
                        </td>
                        <td className="min-w-10"></td>
                        <td className="min-w-20">
                          <h2 className="text-sm font-normal">After</h2>
                        </td>
                      </tr>
                      <tr>
                        <td className="min-w-20">
                          <h2 className="text-sm font-normal">Weight</h2>
                        </td>
                        <td className="min-w-10"></td>
                        <td className="min-w-20">
                          <h2 className="text-base font-black">
                            {item.before_weight}Kg
                          </h2>
                        </td>
                        <td className="min-w-10"></td>
                        <td className="min-w-20">
                          <h2 className="text-base font-black">
                            {item.after_weight}Kg
                          </h2>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>

                {/* Right Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileInView={{ y: [100, 0], opacity: [0, 1] }}
                  className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 second"
                >
                  <div className="md:h-72 h-auto w-full md:w-52">
                    <img
                      src={item.before_url}
                      alt="Before"
                      className="h-full w-full"
                    />
                    <h4 className="text-[#eb0000] text-2xl leading-7 font-black text-center mt-4">
                      Before
                    </h4>
                  </div>

                  <div className="md:h-72 h-auto w-full md:w-52">
                    <img
                      src={item.after_url}
                      alt="After"
                      className="h-full w-full"
                    />
                    <h4 className="text-[#eb0000] text-2xl leading-7 font-black text-center mt-4">
                      After
                    </h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
