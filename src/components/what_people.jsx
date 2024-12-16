import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { TestimonialCard } from "./TestimonialCard";
import people1 from "../assets/img/what_people1.avif";
import people2 from "../assets/img/what_people2.avif";
import people3 from "../assets/img/what_people3.avif";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const What_People_Say = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "false",
      focus: "center",
      direction: "ltr",
      height: "auto",
      width: "100%",
      perPage: 2,
      gap: "1.5rem",
      arrows: false,
      pagination: false,
      autoplay: true, // Enable autoplay
      speed: 1500, // Transition duration in milliseconds
      interval: 3000, // Time between slides in milliseconds
      pauseOnHover: false, // Do not pause autoplay on hover

      breakpoints: {
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();
  }, []);
  return (
    <>
      <div className="my-10">
        <div className="splide relative" ref={splideRef}>
          <div className="splide__track">
            <div className="splide__list">
              {[1, 2, 3].map((item, i) => (
                <div className="splide__slide w-full" key={i}>
                  <TestimonialCard
                    name="David Leo"
                    role="Designer"
                    rating={5}
                    comment="I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!"
                    imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default What_People_Say;
