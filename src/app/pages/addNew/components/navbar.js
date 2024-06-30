"use client";

import Image from "next/image";
import React from "react";
import searchLogo from "../../../../../public/images/icons8_search 1.png";
import explore from "../../../../../public/images/Explore.png";
import hobbies from "../../../../../public/images/Hobbies.png";
import bookmark from "../../../../../public/images/bookmark.png";
import notification from "../../../../../public/images/notifications.png";
import cart from "../../../../../public/images/cart.png";
import userAvatar from "../../../../../public/images/user-avatar.png";
import arrowDown from "../../../../../public/images/dropdown.png";
import logo from "../../../../../public/images/HobbyCue-short.png";
import searchSm from "../../../../../public/images/search-purple.png";
import hamburger from "../../../../../public/images/hamburger.png";
import closeMenu from "../../../../../public/images/close-button.png";
import Link from "next/link";

const Navbar = () => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const [menuState, setMenuState] = React.useState(false);
  return (
    <>
      <nav className="min-w-screen h-20 bg-white px-5 sm:px-24 flex items-center justify-between shadow-md relative z-0">
        <div className="flex gap-7">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-8 sm:h-14 object-contain"
            />
          </Link>
          <div className="hidden items-center sm:hidden md:hidden lg:flex">
            <input
              placeholder="Search here..."
              className="hidden bg-gray-100 min-w-72 hover:bg-gray-200 h-10 p-3 text-xs rounded-l-md lg:block"
            />
            <button className="w-10 h-10 bg-primary p-3 rounded-r-md ">
              <Image src={searchLogo} alt="search" className="object-contain" />
            </button>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <button
            className="sm:hidden md:hidden lg:flex text-sm font-medium flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownState(!dropdownState)}
          >
            <Image src={explore} alt="explore" className="object-contain" />
            Explore
            <Image src={arrowDown} alt="dropdown" className="object-contain" />
          </button>
          {dropdownState && (
            <div className="absolute top-20 w-56 text-sm bg-white border border-gray-200 shadow-lg">
              <ul>
                <li className="p-3 border-b">People - Community</li>
                <li className="p-3 border-b">Places - Venues</li>
                <li className="p-3 border-b">Programs - Events</li>
                <li className="p-3 border-b">Products - Store</li>
                <li className="p-3">Blogs</li>
              </ul>
            </div>
          )}
          <div className="sm:hidden md:hidden lg:flex text-sm font-medium flex items-center gap-2">
            <Image src={hobbies} alt="hobbies" className="object-contain" />
            Hobbies
            <Image
              src={arrowDown}
              alt="dropdown-hobbies"
              className="object-contain"
            />
          </div>
          <button className="hidden md:block lg:block">
            <Image src={bookmark} alt="bookmark" className="object-contain" />
          </button>
          <button className="hidden md:block lg:block">
            <Image
              src={notification}
              alt="notification"
              className="object-contain"
            />
          </button>
          <button className="hidden md:block lg:block">
            <Image src={cart} alt="cart" className="object-contain" />
          </button>
          <button className="flex gap-3 items-center">
            <Image
              src={userAvatar}
              alt="user-avatar"
              className="object-contain"
            />
            <Image src={arrowDown} alt="arrow-down" />
          </button>
        </div>

        <div className="flex sm:hidden gap-4">
          <button className={menuState ? "hidden" : ""}>
            <Image src={searchSm} alt="search-sm" className="object-contain" />
          </button>
          <button className={menuState ? "hidden" : ""}>
            <Image
              src={notification}
              alt="notification"
              className="object-contain"
            />
          </button>
          <button onClick={() => setMenuState(!menuState)}>
            {menuState ? (
              <Image src={closeMenu} alt="close-menu" />
            ) : (
              <Image
                src={hamburger}
                alt="hamburger"
                className="object-contain"
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
