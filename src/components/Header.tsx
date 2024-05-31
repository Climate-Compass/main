"use client";
import Link from "next/link";
import React, { useState } from "react";

type HeaderType = {};

type NavigationType = {
  name: string;
  path: string;
}[];

const navigation: NavigationType = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Governance",
    path: "/",
  },
  {
    name: "Vote",
    path: "/voting",
  },
];

const Header: React.FC<HeaderType> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 z-10 backdrop-blur-sm w-full 
    ${!isOpen && `shadow-md`}`}>
      <div className="lg:container mx-auto flex items-center justify-between p-4 lg:px-0">
        <div className="flex items-center content-center gap-4">
          <Link href={"/"}>Climate Compass!</Link>
        </div>
        <div className="hidden md:flex items-center content-center gap-4">
          {navigation.map((navItem, index) => (
            <Link
              key={index}
              className="px-1 relative py-2 rounded-3xl group"
              href={navItem.path}
            >
              <span className="text-white transition duration-300">
                {navItem.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <w3m-button />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } backdrop-blur-md shadow-md w-full  text-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.path}
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
