import { motion } from "framer-motion";
import CounterNumber from "./counter";

export default function Misson() {
  return (
    <div id="services" className="p-10 px-auto md:px-[5.5rem]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.5, delayChildren: 0.5 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        className="text-[#cc0000] md:text-[#eb0000] md:text-6xl text-2xl  font-black text-center px-auto md:px-20 mb-6 md:mb-4 uppercase"
      >
        Your Fitness.
        <br /> Our Mission.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-base md:text-xl text-[#efefef] leading-8 items-center mb-20 text-center second"
      >
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </motion.p>

      <div className="counter flex flex-col xl:flex-row md:flex-row justify-between items-center gap-3 text-[text-[#efefef] second">
        <div className="counter-item text-center sm:border-b md:border-b-0 md:border-r xl:border-r xl:border-b-0 border-[#1d1d20] px-4 py-5 md:pb-0">
          <h2 className="text-5xl mb-5 text-white">
            <CounterNumber value={100} />k
          </h2>
          <p className="text-sm text-[#797b85]">
            Workouts logged and progress tracked every month
          </p>
        </div>

        <div className="counter-item text-center sm:border-b md:border-r xl:border-r xl:border-b-0 md:border-b-0  border-[#1d1d20]  px-4 py-5 md:pb-0">
          <h2 className="text-5xl mb-5 text-white">
            <CounterNumber value={500} />k
          </h2>
          <p className="text-sm text-[#797b85]">
            Fitness enthusiasts connected through our platform
          </p>
        </div>

        <div className="counter-item text-center  px-4 py-5 md:pb-0">
          <h2 className="text-5xl mb-5 text-white">
            <CounterNumber value={10} />k
          </h2>
          <p className="text-sm text-[#797b85]">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>
    </div>
  );
}
