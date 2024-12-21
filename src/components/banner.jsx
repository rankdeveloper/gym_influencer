import Trusted_user from "./trusted_user";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <div className="banner  ">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 120,
          staggerChildren: 0.5,
          delayChildren: 0.5,
        }}
        className="absolute  top-1/3 md:top-1/4  md:bottom-1/2 bottom-1"
      >
        <Trusted_user />
        <motion.h1
          initial={{ opacity: 0, scale: 1, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            delay: 0.5,
          }}
          exit={{ opacity: 1, scale: 1 }}
          className="text-[#eb0000] text-4xl md:text-7xl leading-tight md:leading-normal font-black text-center px-5 md:px-20"
        >
          Track Your Fitness Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            delay: 1,
          }}
          className="text-[#dcdcdc] text-base md:text-[18px] second leading-6 font-normal text-center px-5 md:px-[14%] mt-4 md:mt-0"
        >
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with our user-friendly interface.
        </motion.p>
      </motion.div>
    </div>
  );
}
