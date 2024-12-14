import React from "react";
import { motion } from "framer-motion";

export default function Animated_Text() {
  return (
    <div className="relative z-50 whitespace-nowrap overflow-hidden">
      <motion.h2
        initial={{}}
        animate={{
          x: [0, 600],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="text-7xl text-red-500"
      >
        Fintess / Transformation / Motivation / Progress / Fitness / Motivation
        / Progress
      </motion.h2>
    </div>
  );
}
