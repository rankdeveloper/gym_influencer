import React from "react";
import { Features } from "./benefits-cards";
import { features } from "../rawData";
import { motion } from "framer-motion";
function Benefits() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
      },
    },
  };

  return (
    <div className=" bg-black text-white p-6 md:px-12 xl:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#eb0000] text-2xl md:text-5xl font-bold text-center md:px-12 xl:px-12"
        >
          Discover GymFluencer Benefits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#dcdcdc] text-base pt-4 md:pt-12 xl:pt-12 text-center md:px-32 xl:px-32 second"
        >
          Unlock your full potential with GymFluencer your personal fitness
          partner for progress and motivation
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row xl:flex items-center justify-center gap-12 py-12"
        >
          <Features features={features} childVariants={childVariants} />
        </motion.div>
      </div>
    </div>
  );
}

export default Benefits;
