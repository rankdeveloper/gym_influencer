export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const XcontainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    scale: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};

export const XchildVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,

    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
