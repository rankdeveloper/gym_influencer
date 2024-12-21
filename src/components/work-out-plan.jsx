import React, { useState } from "react";
import { Menu, Dumbbell, Users, Brain, Target } from "lucide-react";

function Workout_Plan() {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-[#eb0000]" />,
      title: "Customized Workout Plans",
    },
    {
      icon: <Users className="w-12 h-12 text-[#eb0000]" />,
      title: "Professional Guidance",
    },
    {
      icon: <Users className="w-12 h-12 text-[#eb0000]" />,
      title: "Holistic Approach",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="md:pt-44 xl:pt-44 px-4 container mx-auto">
        <div className="text-center max-w-3xl md:max-w-4xl xl:max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl xl:text-4xl font-bold text-[#eb0000] font-['Orbitron']">
              WHAT IS THE WORKOUT PLAN
            </h1>
            <p className="text-[#efefef] text-base md:text-lg xl:text-lg leading-8 second">
              A workout plan is a structured schedule of exercises designed to
              help you reach your fitness goals, stay active, and improve your
              health.
            </p>
          </div>

          <div className="md:space-y-12 xl:space-y-12 space-y-6">
            <h2 className="text-2xl md:text-4xl xl:text-4xl font-bold text-[#eb0000] font-['Orbitron']">
              WHAT WE OFFER:
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg 
                 transition-all duration-300"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 rounded-2xl bg-[#340000]">
                      {service.icon}
                    </div>
                    <h3 className="text-[18px] text-[#efefef] leading-7 font-normal second">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Workout_Plan;
