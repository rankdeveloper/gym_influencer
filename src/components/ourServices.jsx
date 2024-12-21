import React from "react";
import { activities } from "../rawData";
import { motion } from "framer-motion";
export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.5, delayChildren: 0.5 }}
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      className="py-10 md:py-5"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-2xl md:text-4xl font-extrabold text-[#eb0000] text-center uppercase"
      >
        Our Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-[#efefef] text-base md:text-xl leading-8 text-center px-auto md:px-[20%] py-5 second"
      >
        GymFluencer offers 5 essential services to help you achieve your fitness
        goals with ease and flexibility. go
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex flex-col sm:flex-row my-5"
      >
        {activities.map((item, index) => (
          <FitnessPanel key={index} text={item.text} imageUrl={item.imageUrl} />
        ))}
      </motion.div>
    </motion.div>
  );
}

const FitnessPanel = ({ activity, text, imageUrl }) => (
  <motion.div
    initial={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.1 }}
    className="relative w-full md:w-1/5 md:h-[40rem] xl:h-[40rem] h-52 bg-gray-200 items-center justify-center"
  >
    <img
      src={imageUrl}
      alt={activity}
      className="absolute md:inset-0 w-full h-full object-cover "
    />
    <div className="relative z-10 text-white text-center py-24  xl:py-[20rem] md:py-[20rem] h-auto">
      <p className="text-lg font-bold">{text}</p>
    </div>
  </motion.div>
);
