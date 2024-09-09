import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  pt-12 md:pt-20 lg:pt-24 bg-black text-greenyellow">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-center mb-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-greenyellow hover:text-green-900 transition duration-300 ease-in-out mr-4"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-greenyellow hover:text-green-900 transition duration-300 ease-in-out mr-4"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-greenyellow hover:text-green-900 transition duration-300 ease-in-out mr-4"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-greenyellow hover:text-green-900 transition duration-300 ease-in-out"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-greenyellow text-sm text-center mb-4">
          Copyright 2024 aSHI. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap justify-center mb-4">
          <li className="mr-4">
            <a
              href="#"
              className=" border-r border-r-red pr-3 text-greenyellow hover:text-green-900 transition duration-300 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className=" border-r border-r-red pr-3 text-greenyellow hover:text-green-900 transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </li>
          <li className="mr-4">
            <a
              href="#"
              className=" border-r border-r-red pr-3 text-greenyellow hover:text-green-900 transition duration-300 ease-in-out"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="  text-greenyellow hover:text-green-900 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;