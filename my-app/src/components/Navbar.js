import React, { useState } from "react";

import logo from "../assets/gericht.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="bg-[#0C0B08] h-14 flex w-full px-6 md:px-2 text-white justify-between lg:px-16 items-center">
      <img src={logo} className="h-12" />
      <ul className="text-white hidden md:flex justify-between w-80 ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hidden md:inline-block">
        <a className="pr-3 border-r border-[#AAAAAA]" href="#login">
          Log In / Registration
        </a>
        <a className="pl-3" href="/">
          Book Table
        </a>
      </div>
      <div className="sm:block md:hidden">
        <GiHamburgerMenu fontSize={27} onClick={clickHandler} className="cursor-pointer" />
        {showMenu && (
          <div className="bg-[#0C0B08] absolute w-screen h-screen left-0 top-0 flex justify-center items-center animate-slide">
            <MdOutlineRestaurantMenu className="text-[#DCCA87] absolute top-4 right-4 text-3xl cursor-pointer" onClick={clickHandler} />
            <ul className="text-[#DCCA87] text-4xl flex flex-col justify-around h-72">
              <li>
                <a onClick={clickHandler} href="#home">Home</a>
              </li>
              <li>
                <a onClick={clickHandler} href="#about">About</a>
              </li>
              <li>
                <a onClick={clickHandler} href="#menu">Menu</a>
              </li>
              <li>
                <a onClick={clickHandler} href="#awards">Awards</a>
              </li>
              <li>
                <a onClick={clickHandler} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
