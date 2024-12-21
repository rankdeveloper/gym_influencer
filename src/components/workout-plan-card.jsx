import React from "react";
import { levels_list } from "../rawData";
import { motion } from "framer-motion";
import { XchildVariants, XcontainerVariants } from "../animation-variants";
const Work_Out_Plan = () => {
  return (
    <div className="min-h-screen bg-black py-10  max-w-3xl md:max-w-4xl xl:max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=" text-center md:text-4xl text-2xl xl:text-4xl md:leading-9 xl:leading-9  font-bold text-[#eb0000] mb-4 md:px-0 lg:px-0 px-6 uppercase"
      >
        Select Your Workout Plan
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="text-[#dcdcdc] md:text-xl xl:text-xl leading-8 text-center second md:px-32 xl:px-32 mb-4"
      >
        Choose a workout plan that fits your goals, whether it’s building
        strength, losing weight, or staying active. Find the perfect plan for
        you!
      </motion.p>
      <motion.div
        variants={XcontainerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-4"
      >
        {levels_list.map((level, index) => (
          <motion.div
            variants={XchildVariants}
            key={index}
            className={`  text-white   shadow-lg`}
          >
            <img
              src={level.image}
              alt={level.title}
              className={`w-full h-96 object-cover  ${
                [1, 3].includes(index) ? "mt-12" : ""
              }`}
            />
            <h3
              className={` text-2xl leading-8 font-bold mt-4 text-[#eb0000] `}
            >
              {level.title}
            </h3>
            <p className="text-[#dcdcdc] text-base leading-7 mt-2 second !text-left">
              {level.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work_Out_Plan;
