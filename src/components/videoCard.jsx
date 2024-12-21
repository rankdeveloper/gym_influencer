import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import youtubeCover from "../assets/img/youtube_cover.avif";

const VideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClickOutside = (event) => {
    if (videoRef.current && !videoRef.current.contains(event.target)) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const thumbnailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  };

  const iframeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  };

  return (
    <div className="mb-8 flex items-center justify-center bg-black">
      <motion.div
        className="w-[90%] md:w-[65%] md:max-w-4xl rounded-lg overflow-hidden shadow-lg"
        ref={videoRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.iframe
              key="iframe"
              src="https://www.youtube.com/embed/pznrAWMhahA?autoplay=1&rel=0"
              title="YouTube Video"
              className="w-full relative h-320 md:h-[420px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              variants={iframeVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
            ></motion.iframe>
          ) : (
            <motion.div
              key="thumbnail"
              className="md:h-[420px] h-320 relative"
              variants={thumbnailVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={youtubeCover}
                alt="Video Thumbnail"
                className="w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default VideoCard;
