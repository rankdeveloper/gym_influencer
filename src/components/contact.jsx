import React, { useState } from "react";
import logo from "../assets/img/h_logo.svg";
import contact from "../assets/img/contact.avif";
import ContactForm from "./contact-form";

function Contact() {
  return (
    <div id="contact" className="flex justify-center items-center relative">
      <div className=" max-w-3xl md:max-w-4xl xl:max-w-4xl mx-auto   bg-black text-white border border-red-500 py-12">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container lg:w-full w-[95%] mx-auto px-6 lg:py-0 !py-6   form xl:min-h-[420px] md:min-h-[420px] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-[60%] space-y-2">
            <h1 className="md:text-4xl xl:text-4xl text-3xl  font-bold text-[#eb0000] leading-tight  break-words">
              Kickstart Your Fitness Journey with Gymfluencer
            </h1>

            <p className="xl:text-[18px] md:text-[18px] text-base text-[#efefef] max-w-xl second !mb-5">
              Experience all that GymFluencer has to offer with a free trial.
              Explore our world-class amenities, personalized diet plans, and
              professional training programs—absolutely free.
            </p>
            <hr className="w-full h-[1px] bg-[#efefef] mt-4 border-t-0" />
            <img src={logo} alt="logo" className="h-14 !mt-4 " />
          </div>

          <div className="lg:w-[40%] w-full max-w-md">
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
