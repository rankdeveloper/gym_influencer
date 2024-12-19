import React, { useState, useRef, useEffect } from "react";
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

  return (
    <div className="mb-8  flex items-center justify-center  bg-black">
      <div
        className="w-[90%] md:w-[65%] md:max-w-4xl rounded-lg overflow-hidden shadow-lg"
        ref={videoRef}
      >
        {isPlaying ? (
          <iframe
            src="https://www.youtube.com/embed/pznrAWMhahA?autoplay=1&rel=0"
            title="YouTube Video"
            className="w-full relative h-320 md:h-[420px] "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="md:h-[420px] h-320 relative ">
            <img
              src={youtubeCover}
              alt="Video Thumbnail"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
