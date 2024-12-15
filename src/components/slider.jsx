import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import workout_graph from "../assets/img/workout_graph.avif";
import skip_warm_up from "../assets/img/skip_warm_up.avif";
import sample_plan from "../assets/img/sample_plan.avif";
import personalized from "../assets/img/personalized.avif";

const Vertical_Slider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "false",
      focus: "center",
      direction: "ttb",
      height: "350px",
      width: "100%",
      perPage: 1,
      gap: "1rem",
      arrows: false,
      pagination: false,
      autoplay: true,
      speed: 1.5,
      interval: 1500,

      pauseOnHover: false,
      breakpoints: {
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();
  }, []);

  const img = [workout_graph, skip_warm_up, sample_plan];
  return (
    <div className="vertical_slider">
      <div
        className="splide"
        ref={splideRef}
        style={{ border: "1px solid red" }}
      >
        <div className="splide__track" style={{ border: "1px solid blue" }}>
          <div className="splide__list">
            {img.map((item, i) => (
              <div
                className="splide__slide"
                key={i}
                style={{
                  width: "100%",
                }}
              >
                <img src={item} alt={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vertical_Slider;
