import Trusted_user from "./trusted_user";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <div className="banner  ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 100,
          staggerChildren: 0.5,
          delayChildren: 0.5,
        }}
        className="absolute  top-1/3 md:top-1/4  md:bottom-1/2 bottom-1"
      >
        <Trusted_user />
        <h1 className="text-[#eb0000] text-4xl md:text-7xl leading-tight md:leading-normal font-black text-center px-5 md:px-20">
          Track Your Fitness Journey
        </h1>
        <p className="text-[#dcdcdc] text-base md:text-xl second leading-6 font-bold text-center px-5 md:px-[14%] mt-4 md:mt-0">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with our user-friendly interface.
        </p>
      </motion.div>
    </div>
  );
}
