"use client";

import React, { useState } from "react";
import hero from "../../../public/images/hero.png";
import google from "../../../public/images/Google.png";
import facebook from "../../../public/images/Facebook.png";
import password from "../../../public/images/see-password.png";
import forgotPassword from "../../../public/images/forgot-password.png";
import Image from "next/image";

const HeroSection = () => {
  const [signIn, setSignIn] = useState(false);
  const [joinIn, setJoinIn] = useState(true);
  const handleSetSignIn = () => {
    setSignIn(true);
    setJoinIn(false);
  };

  const handleSetJoinIn = () => {
    setJoinIn(true);
    setSignIn(false);
  };
  return (
    <div className="min-w-screen h-screen-sm grid pt-8 sm:pt-24 gap-x-32 gap-y-20 hero-section px-5 sm:px-24 bg-primaryLight">
      <div className="">
        <h1 className="font-semibold text-4xl italic">
          Explore your <span className="text-secondary">hobby</span> or{" "}
          <span className="text-primary">passion</span>
        </h1>
        <p className="hidden line-height text-sm mt-8 sm:block">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="text-sm line-height mt-8 sm:hidden">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform.
        </p>
        <p className="hidden line-height text-sm mt-4 sm:block">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </div>
      <div className="grid-row-span-2">
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
              <p className="font-semibold text-xs">Continue with Google</p>
            </button>
            <button className="w-full h-10 border border-primary rounded-lg flex items-center gap-20 py-3 px-6">
              <Image src={facebook} alt="facebook" />
              <p className="font-semibold text-xs">Continue with Facebook</p>
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
                placeholder="Email"
                className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3 mb-4"
              />
              <div className="mb-3">
                <input
                  placeholder="Password"
                  className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3"
                />
                <button className="relative float-right bottom-7 mr-3">
                  <Image src={password} alt="see-password" />
                </button>
                <div className="w-full flex items-center justify-between">
                  <div className="w-44 flex gap-1">
                    <span className="inline-block h-1 bg-white grow rounded-md"></span>
                    <span className="inline-block h-1 bg-white grow rounded-md"></span>
                    <span className="inline-block h-1 bg-white grow rounded-md"></span>
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
            <button className="w-full h-10 border border-primary rounded-lg flex items-center py-3 px-6 gap-20  mb-4 mt-8">
              <Image src={google} alt="google" className="object-contain"/>
              <p className="font-semibold text-xs">Continue with Google</p>
            </button>
            <button className="w-full h-10 border border-primary rounded-lg flex items-center gap-20 py-3 px-6">
              <Image src={facebook} alt="facebook" />
              <p className="font-semibold text-xs">Continue with Facebook</p>
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
                className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3 mb-4"
              />
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-100 text-xs rounded-lg py-3 px-3"
                />
                <button className="relative float-right bottom-7 mr-3">
                  <Image src={password} alt="see-password" />
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
      </div>

      <div className="flex items-end">
        <Image src={hero} alt="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
