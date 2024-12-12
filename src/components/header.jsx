import React from "react";

import logo from "../assets/img/h_logo.svg";
export default function Header() {
  return (
    <header className=" text-white mx-auto border rounded-[5rem] xl max-w-4xl header items-center absolute z-50">
      <nav className="container  flex justify-between p-2 items-center">
        <div className="flex items-center space-x-2 h-14 w-40">
          <img src={logo} alt="Gymfluencer Logo" className="" />
        </div>

        <ul className="flex items-center space-x-8 text-sm font-medium">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
          <li className="relative group">
            <span className="hover:text-red-500 cursor-pointer">
              Our Services
            </span>
            <div className="absolute left-0 hidden group-hover:block bg-black text-lightGray rounded-md mt-2 shadow-lg">
              <ul className="flex flex-col space-y-2 p-4">
                <li className="hover:text-red-500 cursor-pointer">Service 1</li>
                <li className="hover:text-red-500 cursor-pointer">Service 2</li>
                <li className="hover:text-red-500 cursor-pointer">Service 3</li>
              </ul>
            </div>
          </li>
          <li className="hover:text-red-500 cursor-pointer">Benefits</li>
          <li className="hover:text-red-500 cursor-pointer">Blogs</li>
          <li className="hover:text-red-500 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-bold">
          Download App
        </button>
      </nav>
    </header>
  );
}
