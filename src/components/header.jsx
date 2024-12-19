import React, { useEffect, useRef, useState } from "react";

import logo from "../assets/img/h_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed flex top-0 left-0 right-0 w-full md:w-[90%] z-50 border-gray h-auto mx-auto">
      <header className=" md:!mx-auto mt-8 text-[#96979c] border rounded-[5rem] xl max-w-4xl header items-center relative">
        <nav className="container flex justify-between p-2 items-center">
          <div className="flex items-center space-x-2 h-9 w-36">
            <img src={logo} alt="Gymfluencer Logo" />
          </div>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>

            <li className="relative" ref={dropdownRef}>
              <span
                onClick={toggleDropdown}
                className="hover:text-red-500 cursor-pointer flex items-center"
              >
                Our Services
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-1 transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>

              {isOpen && (
                <div className="absolute left-0 min-w-[200px] bg-[#141414] text-lightGray rounded-md mt-2 shadow-lg">
                  <ul className="flex flex-col space-y-2 p-4">
                    <li className="hover:text-red-500 cursor-pointer">
                      Workout Plan
                    </li>
                    <li className="hover:text-red-500 cursor-pointer">
                      Diet Plan
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="hover:text-red-500 cursor-pointer">Benefits</li>
            <li className="hover:text-red-500 cursor-pointer">Blogs</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>

          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-bold">
            Join us now
          </button>
        </nav>
      </header>
    </div>
  );
}
