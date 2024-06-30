import Image from "next/image";
import React from "react";
import testimonialIcon from "../../../public/images/testimonial.png";
import playButton from "../../../public/images/play-button.png";
import playerAvatar from "../../../public/images/dancer-ellipse-with-mic.png";
import avatar from "../../../public/images/dancer-ellipse.png";
import mic from "../../../public/images/mic.png";

const Testimonial = () => {
  return (
    <section className="bg-white p-8 sm:p-24">
      <div className="p-6 sm:p-11 flex flex-col gap-5 sm:gap-7 items-center sm:items-start justify-center sm:justify-start bg-primaryLight border rounded-lg">
        <div className="flex items-center gap-3 sm:gap-5">
          <Image
            src={testimonialIcon}
            alt="testimonial"
            className="object-contain w-8 sm:w-10 h-8 sm:h-10"
          />
          <p className="text-lg sm:text-2xl font-semibold">Testimonials</p>
        </div>
        <p className="text-xs sm:text-lg text-gray-500 font-light tracking-wide text-center sm:text-start">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>


        <div className="w-full grid gap-10 sm:gap-16 py-5 testimonial-columns">
          <div className="element-one bg-primaryMedium px-3 sm:px-6 py-3 flex items-center gap-4 justify-between rounded-lg">
            <div className="bg-white w-14 h-7 sm:w-12 sm:h-10 rounded-full flex justify-center">
              <Image
                src={playButton}
                alt="play-button"
                className="object-contain"
              />
            </div>
            <div className="w-full flex items-center gap-4">
              <div className="flex items-center">
                <span className="inline-block bg-primary w-4 h-4 rounded-full"></span>
                <span className="inline-block bg-white w-20 sm:w-80 h-1 shrink"></span>
              </div>
              <p className="text-xs text-gray-500 mr-2">0:00</p>
            </div>
            <div>
              <Image
                src={playerAvatar}
                alt="player-avtar"
                className="object-contain relative z-0 top-5"
              />
              <Image
                src={mic}
                alt="mic"
                className="relative z-10 right-3 bottom-2"
              />
            </div>
          </div>

          <div className="element-two flex gap-3 items-center">
            <Image src={avatar} alt="avatar" className="object-contain"/>
            <div>
              <p className=" text-base sm:text-lg font-semibold text-primary tracking-wide">
                Shubha Nagarajan
              </p>
              <p className="text-sm font-normal text-secondary tracking-wide">
                Classical Dancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
