import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const CounterNumber = ({ value = 0, ...props }) => {
  const [inView, setInView] = useState(false);

  const initValue = Math.max(value - 50, 0);
  const spring = useSpring(initValue, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <motion.span
      {...props}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onViewportEnter={() => setInView(true)}
    >
      {display}
    </motion.span>
  );
};

export default CounterNumber;
