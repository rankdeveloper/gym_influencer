import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { gyms } from "../rawData";

export default function Gym() {
  const [selectedGym, setSelectedGym] = useState(gyms[0]);

  console.log("selected gym  ", selectedGym);
  return (
    <main className="max-w-7xl mx-auto  px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 text-[#eb0000] uppercase text-center">
        Find Your Nearest Gym
      </h2>
      <p className="text-xl leading-8 text-white mb-8 text-center">
        Easily discover gyms near your location to kickstart
      </p>
      <div className="flex flex-col  lg:flex-row gap-6">
        <div className="w-[60%] rounded-lg max-h-[550px] space-y-4 p-5 overflow-y-scroll scrollbar-hide  bg-[#121212]">
          {gyms.map((gym) => (
            <GymCard
              key={gym.id}
              {...gym}
              isSelected={selectedGym.id === gym.id}
              onSelect={() => setSelectedGym(gym)}
            />
          ))}
        </div>

        <div className="w-[40%] h-[550px] lg:sticky lg:top-6">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Gym Location"
              width="100%"
              height="100%"
              loading="lazy"
              src={selectedGym.mapUrl}
              referrerpolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const GymCard = ({ id, name, image, phone, address, isSelected, onSelect }) => {
  return (
    <div
      className={`flex cursor-pointer bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        isSelected
          ? "border-2 border-[#ea0000] bg-[#ea0000]"
          : "border-2 border-transparent"
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-all duration-400"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-base font-bold mb-2 text-white">{name}</h3>
        <div className="flex items-center text-white mb-1">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm">{phone}</span>
        </div>
        <div className="flex items-center text-white">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{address}</span>
        </div>
      </div>
    </div>
  );
};
