"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/HobbyCue-Logo.png";
import searchLogo from "../../../public/images/icons8_search 1.png";
import explore from "../../../public/images/Explore.png";
import hobbies from "../../../public/images/Hobbies.png";
import bookmark from "../../../public/images/bookmark.png";
import notification from "../../../public/images/notifications.png";
import cart from "../../../public/images/cart.png";
import dropdown from "../../../public/images/dropdown.png";
import searchSm from "../../../public/images/search-purple.png";
import hamburger from "../../../public/images/hamburger.png";
import closeMenu from "../../../public/images/close-button.png";
import google from "../../../public/images/Google.png";
import facebook from "../../../public/images/Facebook.png";
import password from "../../../public/images/see-password.png";
import forgotPassword from "../../../public/images/forgot-password.png";
import hidePassword from "../../../public/images/hide-password.png";
import Link from "next/link";

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [joinIn, setJoinIn] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleSetSignIn = () => {
    setSignIn(true);
    setJoinIn(false);
  };

  const handleSetJoinIn = () => {
    setJoinIn(true);
    setSignIn(false);
  };
  const seePassword = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <>
      <nav
        className="min-w-screen h-20 bg-white px-5 sm:px-24 flex items-center justify-between shadow-md 
      relative z-0"
      >
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="h-8 w-32 sm:h-14 sm:w-72 object-contain"
          />
        </Link>
        <div className="hidden items-center sm:hidden md:hidden lg:flex">
          <input
            placeholder="Search here..."
            className="hidden bg-gray-100 hover:bg-gray-200 h-10 p-3 text-xs rounded-l-md lg:block"
          />
          <button className="w-10 h-10 bg-primary p-3 rounded-r-md ">
            <Image src={searchLogo} alt="search" className="object-contain" />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <button
            className="sm:hidden md:hidden lg:flex text-sm font-medium flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownState(!dropdownState)}
          >
            <Image src={explore} alt="explore" className="object-contain" />
            Explore
            <Image src={dropdown} alt="dropdown" className="object-contain" />
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
              src={dropdown}
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
          <button className="w-28 h-10 rounded-md border-2 border-primary text-sm font-semibold text-primary">
            Sign in
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
      {menuState && (
        <section className="block sm:hidden px-4 py-6">
          <div className="flex gap-8 items-center text-xl font-semibold justify-center sm:justify-start">
            <button
              className={
                signIn
                  ? "text-primary underline underline-offset-8"
                  : "text-gray-400"
              }
              onClick={() => handleSetSignIn()}
            >
              Sign In
            </button>
            <button
              className={
                joinIn
                  ? "text-primary underline underline-offset-8"
                  : "text-gray-400"
              }
              onClick={() => handleSetJoinIn()}
            >
              Join In
            </button>
          </div>
          <div className={joinIn ? "flex flex-col gap-7" : "hidden"}>
            <div>
              <button className="w-full h-10 border border-primary rounded-lg flex items-center gap-20 py-3 px-6 mb-4 mt-8">
                <Image src={google} alt="google" />
                <p className="font-semibold text-sm">Continue with Google</p>
              </button>
              <button className="w-full h-10 border border-primary rounded-lg flex items-center gap-20 py-3 px-6">
                <Image src={facebook} alt="facebook" />
                <p className="font-semibold text-sm">Continue with Facebook</p>
              </button>
            </div>

            <div className="text-xs flex gap-1 items-center">
              <span className="inline-block grow line bg-gray-400 "></span>
              Or connect with
              <span className="inline-block grow line bg-gray-400 "></span>
            </div>

            <div>
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3 mb-4 bg-gray-200"
                />
                <div className="mb-3">
                  <input
                    type={toggle ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3 bg-gray-200"
                  />
                  <button
                    className="relative float-right bottom-7 mr-3"
                    onClick={(e) => seePassword(e)}
                  >
                    {toggle ? (
                      <Image
                        src={password}
                        alt="see-password"
                        className="object-contain h-4"
                      />
                    ) : (
                      <Image
                        src={hidePassword}
                        alt="hide-password"
                        className="object-contain h-4"
                      />
                    )}
                  </button>
                  <div className="w-full flex items-center justify-between">
                    <div className="w-44 flex gap-1">
                      <span className="inline-block h-1 bg-gray-200 grow rounded-md"></span>
                      <span className="inline-block h-1 bg-gray-200 grow rounded-md"></span>
                      <span className="inline-block h-1 bg-gray-200 grow rounded-md"></span>
                    </div>
                    <p className="text-gray-500 font-semibold text-xxs">
                      Password Strength
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xxs sm:text:xs text-gray-400 mb-3">
                    By continuing, you agree to our{" "}
                    <span className=" text-black">Terms of Service</span> and{" "}
                    <span className="text-black">Privacy Policy</span>.
                  </p>
                  <button className="w-full bg-primary py-3 rounded-lg text-white font-semibold text-sm">
                    Agree and Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className={signIn ? "flex flex-col gap-7" : "hidden"}>
            <div>
              <button className="w-full h-10 border border-primary rounded-lg flex items-center gap-20 py-3 px-6 mb-4 mt-8">
                <Image src={google} alt="google" />
                <p className="font-semibold text-sm">Continue with Google</p>
              </button>
              <button className="w-full h-10 border border-primary rounded-lg flex items-center gap-20 py-3 px-6">
                <Image src={facebook} alt="facebook" />
                <p className="font-semibold text-sm">Continue with Facebook</p>
              </button>
            </div>

            <div className="text-xs flex gap-1 items-center">
              <span className="inline-block grow line bg-gray-400 "></span>
              Or connect with
              <span className="inline-block grow line bg-gray-400 "></span>
            </div>

            <div>
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3 mb-4 bg-gray-200"
                />
                <div className="mb-3">
                  <input
                    type={toggle ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3 bg-gray-200"
                  />
                  <button
                    className="relative float-right bottom-7 mr-3"
                    onClick={(e) => seePassword(e)}
                  >
                    {toggle ? (
                      <Image
                        src={password}
                        alt="see-password"
                        className="object-contain h-4"
                      />
                    ) : (
                      <Image
                        src={hidePassword}
                        alt="hide-password"
                        className="object-contain h-4"
                      />
                    )}
                  </button>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <p className="text-xs">Remember Me</p>
                    </div>
                    <div className="flex gap-2">
                      <Image src={forgotPassword} alt="forgot-password" />
                      <p className="text-xs">Forgot Password?</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xxs sm:text:xs text-gray-400 mb-3">
                    By continuing, you agree to our{" "}
                    <span className=" text-black">Terms of Service</span> and{" "}
                    <span className="text-black">Privacy Policy</span>.
                  </p>
                  <button className="w-full bg-white py-3 rounded-lg text-black border border-black font-semibold text-sm">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
