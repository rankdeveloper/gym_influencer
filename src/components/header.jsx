import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/img/h_logo.svg";
import { Link } from "react-scroll";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropDown = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const mNav = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "#services",
    },
    {
      name: "Services",
      href: "/workout-plans",
    },
    {
      name: "Blogs",
      href: "#blogs",
    },
    {
      name: "Contact",
      href: "#faq",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current?.contains &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (
        mobileDropDown.current?.contains &&
        !mobileDropDown.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed flex top-0 left-0 right-0 w-full items-center xl:items-center justify-center xl:justify-center md:w-[90%] xl:w-[90%] z-50 border-gray h-auto mx-auto">
        <header className="!w-[90%] md:w-full xl:w-full md:!mx-auto xl:!mx-auto mt-8 text-[#96979c] border  md:rounded-[5rem] md:max-w-4xl xl:max-w-[1100px] header items-center relative bg-black md:bg-transparent">
          <nav className="container flex justify-between p-3 md:p-3 xl:p-3 items-center">
            <div className="flex items-center space-x-2 h-9 w-36">
              <img src={logo} alt="Gymfluencer Logo" className="h-full" />
            </div>

            {/* for desktop */}
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <li className="hover:text-red-500 cursor-pointer">
                <RouterLink to="/" className="no-underline">
                  Home
                </RouterLink>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="no-underline"
                >
                  About
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <span
                  onClick={toggleDropdown}
                  className="hover:text-red-500 cursor-pointer flex items-center"
                >
                  Our Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
                {isOpen && (
                  <div className="absolute left-0 min-w-[200px] bg-[#141414] text-lightGray rounded-md mt-2 shadow-lg">
                    <ul className="flex flex-col space-y-2 p-4">
                      <li className="hover:text-red-500 cursor-pointer">
                        <RouterLink
                          to={"/workout-plans"}
                          className="no-underline"
                        >
                          {" "}
                          Workout Plan
                        </RouterLink>
                      </li>
                      <li className="hover:text-red-500 cursor-pointer">
                        Diet Plan
                        <RouterLink to={"/"} className="no-underline">
                          {" "}
                          Diet Plan
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="no-underline"
                >
                  Benefits
                </Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link
                  to="blogs"
                  smooth={true}
                  duration={500}
                  className="no-underline"
                >
                  Blogs
                </Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">Contact</li>
            </ul>

            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-bold">
                Join us now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white"
              >
                {isMobileMenuOpen ? (
                  <>
                    <div className=" p-3 rounded-full bg-[#18181a]">
                      <img
                        className="h-6 w-6 object-cover"
                        src="https://framerusercontent.com/images/tIEQjQ5QDx1TzUHLSEdkAOUig.svg
"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" p-3 rounded-full bg-[#18181a]">
                      <img
                        className="h-6 w-6 object-cover"
                        src="https://framerusercontent.com/images/tIEQjQ5QDx1TzUHLSEdkAOUig.svg
"
                      />
                    </div>
                  </>
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* //for mbile    */}
      {isMobileMenuOpen && (
        <div
          ref={mobileDropDown}
          className="fixed top-32 right-8 z-50 min-w-[150px] bg-[#141414] text-lightGray rounded-md mt-2 shadow-lg"
        >
          <ul className="flex flex-col space-y-2 p-4">
            {mNav.map((item, index) => (
              <li
                key={index}
                className="hover:text-red-500 text-[#96979c] cursor-pointer text-base second"
              >
                <RouterLink to={item.href} className="no-underline">
                  {item.name}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
