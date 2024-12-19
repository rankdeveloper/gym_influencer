import React from "react";
import { Mail, Dumbbell } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logo.svg";

export default function Footer() {
  return (
    <header className="flex flex-col items-center gap-8 md:py-8 pt-8 px-[5%] md:px-0">
      <Logo />
      <h2 className="text-base text-[#bdbdbd] text-center md:text-left">
        Where Fitness Meets Social Connection!
      </h2>
      <ContactButton email="hello@gym.birlaventures.com" />
      <Navigation />
      <F_bottom />
    </header>
  );
}

const ContactButton = ({ email }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="flex items-center gap-2 px-6 py-3 bg-[#18181a] rounded-lg hover:bg-gray-700 transition-colors text-sm second"
    >
      <Mail className="w-5 h-5 text-white " />
      <span className="text-gray-200">{email}</span>
    </a>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-[#bdbdbd] hover:text-white font-tech text-base transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5  hover:after:w-full after:transition-all"
    >
      {children}
    </a>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    { Icon: faLinkedin, href: "#", label: "LinkedIn" },
    { Icon: faInstagram, href: "#", label: "instagram" },
    { Icon: faTwitter, href: "#", label: "twitter" },
  ];

  return (
    <div className="flex gap-4 items-center justify-center ">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex items-center justify-center text-[#bdbdbd] hover:text-white transition-colors p-2 rounded-md bg-[#18181a] second"
        >
          <FontAwesomeIcon icon={Icon} className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

const F_bottom = () => {
  return (
    <footer className="mt-auto py-6 border-t border-[#18181a] md:w-[90%] ">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-[#bdbdbd] text-sm md:text-base text-center md:text-left mt-4 md:mt-0">
          © 2024 GymFluencer. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="md:h-12 md:w-full w-[45%]">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
};

const Navigation = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/workout-plan", label: "Workout Plan" },
    { href: "/diet-plan", label: "Diet Plan" },
    { href: "/faqs", label: "FAQ's" },
  ];

  return (
    <nav>
      <ul className="flex flex-wrap md:flex-nowrap items-center text-base md:gap-8 gap-6  px-[10%] md:px-0 justify-center md:justify-between">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
