import React, {useState, useRef} from "react";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import logo from "/logo.jpg";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaGamepad,
  FaSearch,
  FaMoon,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
   
  };
  return (
    <header className="sticky top-0 z-50 ">
      <div className=" bg-greenyellow bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')] p-[2px] flex justify-between items-center lg:px-20 px-7">
        <div className="flex space-x-4 text-white">
          <FaFacebookF
            alt="Facebook Icon"
            className=" lg:text-lg text-sm hover:text-red-800 hover:scale-105 hover:transition hover:duration-300 ease-in-out cursor-pointer"
          />
          <FaTwitter
            alt="Twitter Icon"
            className=" lg:text-lg text-sm hover:text-red-800 hover:scale-105 hover:transition hover:duration-300 ease-in-out cursor-pointer"
          />
          <FaTwitch
            alt="Twitch Icon"
            className=" lg:text-lg text-sm hover:text-red-800 hover:scale-105 hover:transition hover:duration-300 ease-in-out cursor-pointer"
          />
          <FaYoutube
            alt="YouTube Icon"
            className=" lg:text-lg text-sm hover:text-red-800 hover:scale-105 hover:transition hover:duration-300 ease-in-out  cursor-pointer"
          />
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            title="FAQs Page"
            className="text-white lg:text-lg text-sm border-r pr-2 hover:text-red-800"
          >
            FAQs
          </a>
          <a
            href="#"
            title="Terms Page"
            className="text-white lg:text-lg text-sm border-r pr-2 hover:text-red-800"
          >
            Terms
          </a>
          <a
            href="#"
            title="Contact Us Page"
            className="text-white lg:text-lg text-sm hover:text-red-800"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="bg-black lg:p-4 p-3 flex justify-between items-center lg:px-20 px-7 border-b-2 border-greenyellow shadow-sm shadow-green-600">
        <div className="flex items-center lg:space-x-2 space-x-1 backdrop:brightness-0">
          <Link to="" className="cursor-pointer flex items-center lg:space-x-2 space-x-1">
            {" "}
            <img src={logo} className=" lg:size-10 size-8 " alt="" />
            <span className="text-green-500 hover:text-white cursor-pointer lg:text-xl text-lg">
              Gameton
            </span>
          </Link>
        </div>
        <div className="lg:flex space-x-4 hidden ">
          <Link spy={true} to="Home" smooth={true}>
            <a
              href="#"
              title="Home Page"
              className="text-white hover:text-green-800"
            >
              Home
            </a>
          </Link>
          <Link spy={true} to="News" smooth={true}>
            <a
              href="#"
              title="News Page"
              className="text-white hover:text-green-800"
            >
              News
            </a>
          </Link>
          <Link spy={true} to="Guides" smooth={true}>
            <a
              href="#"
              title="Guides Page"
              className="text-white hover:text-green-800"
            >
              Guides
            </a>
          </Link>
         
          <Link spy={true} to="Games" smooth={true}>
            <a
              href="#"
              title="Games Page"
              className="text-white hover:text-green-800"
            >
              Games
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Subscribe to our newsletter"
            className=" bg-gradient-to-t    from-lightgreenyellow to-green-800 hover:from-green-800 hover:to-lightgreenyellow text-white lg:py-2  px-4  py-1 last:rounded-full"
          >
            Subscribe
          </button>
        </div>
        <div
          className="menu text-[32px] lg:hidden text-green-800  cursor-pointer  ease-in-out p-0 hover:text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseCircleOutline /> : <IoMenu />}
        </div>
        </div>
        {isOpen && (
          <>
            <div
              onClick={toggleMenu}
              className="h-screen w-full fixed inset-0  bg-greenyellow 
               bg-opacity-10 cursor-move"

            ></div>
            <div className="  lg:hidden flex absolute right-0 border-b-2 
            bg-black border-l-2 border-greenyellow shadow-sm shadow-green-600 backdrop-brightness-0 px-6 
            rounded-bl-2xl 
            text-white w-fit p-8 ">
              <ul className="option flex flex-col justify-between font-semibold gap-y-6 ">

                <Link spy={true} smooth={true} to="Home"  >
                <li className="ng   border-greenyellow border-b-2  hover:text-green-600 hover:text-shadow-lg cursor-pointer 
                
                pl-3 rounded-bl-xl 
              hover:font-Berkshire">
                   Home
                </li>
                </Link>

                <Link spy={true} smooth={true} to="News">
                <li className="ng   border-greenyellow border-b-2  hover:text-green-600 hover:text-shadow-lg cursor-pointer 
                
                pl-3 rounded-bl-xl hover:font-Berkshire">
                  News
                </li>
                </Link>

                <Link spy={true} smooth={true} to="Guides">
                <li className="ng   border-greenyellow border-b-2  hover:text-green-600 hover:text-shadow-lg cursor-pointer 
                
                pl-3 rounded-bl-xl hover:font-Berkshire">
                 Guides
                </li>
                </Link>

               

                <Link spy={true} smooth={true} to="Games">
                <li className="ng   border-greenyellow border-b-2  hover:text-green-600 hover:text-shadow-lg cursor-pointer 
                
                pl-3 rounded-bl-xl hover:font-Berkshire">
               
                  Games
                </li>
                </Link>
                
              </ul>
            </div>
          </>
        )}
    </header>
  );
};

export default Header;
