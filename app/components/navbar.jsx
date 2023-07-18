"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div className="container mx-auto px-80 flex flex-wrap items-center justify-between">
        {/* Mobile menu button*/}
        <div className="lg:hidden">
          <button
            className="px-3 py-2 flex items-center text-white uppercase"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-6 h-6 fill-current"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 7a1 1 0 011.707-.707L10 8.586l2.293-2.293A1 1 0 0114 7v6a1 1 0 01-1 1H7a1 1 0 01-1-1V7z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm1 4a1 1 0 100 2h10a1 1 0 100-2H5z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`lg:flex justify-center items-center ${
            isOpen ? "" : "hidden"
          }`}
        >
          <Link href="/about">
            <span className="text-center cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Головна
            </span>
          </Link>
          <Link href="/about">
            <span className="text-center cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Про нас
            </span>
          </Link>
          <Link href="/faq">
            <span className="text-center cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Корисні матеріали
            </span>
          </Link>
          <Link href="/reviews">
            <span className="text-center cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Відгуки
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-center cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Контакти
            </span>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-end">
          <div className="flex">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-200 mx-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-200 mx-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.telegram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-200 mx-2"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
