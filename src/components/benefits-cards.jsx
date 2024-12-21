import { FeatureCard } from "./benefit-card";
import mobileCover from "../assets/img/mobile1.png";
import mimg from "../assets/img/m1.avif";

export function Features({ features }) {
  return (
    <>
      {/* left */}
      <div className="w-full md:w-[45%] xl:w-[45%] grid grid-cols-1 gap-6">
        <FeatureCard {...features[0]} />
        <FeatureCard {...features[2]} />
      </div>

      {/* center */}
      <div className="w-full md:w-auto xl:w-auto order-first md:order-none xl:order-none">
        <div className="relative w-[320px] h-[600px] mx-auto">
          <img src={mobileCover} alt="mobileCover" className="w-full h-full" />
          <img
            className="absolute top-0 left-0 w-full h-full p-4 !py-[9px] object-cover rounded-[2.5rem] 
             alt="
            mobileCover
            src={mimg}
          />
        </div>
      </div>

      {/* right */}
      <div className="w-full md:w-[45%] xl:w-[45%] grid grid-cols-1 gap-6">
        <FeatureCard {...features[1]} />
        <FeatureCard {...features[3]} />
      </div>
    </>
  );
}
