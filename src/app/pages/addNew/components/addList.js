"use client";

import React, { useState } from "react";

import people from "../../../../../public/images/people.png";
import place from "../../../../../public/images/location.png";
import product from "../../../../../public/images/product.png";
import schedule from "../../../../../public/images/schedule.png";
import add from "../../../../../public/images/add.png";
import Image from "next/image";
import ScrollToTop from "@/app/components/scrollToTop";

const AddList = () => {
  const features = [
    {
      index: 1,
      icon: people,
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
      color: "primary",
    },
    {
      index: 2,
      icon: place,
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
      color: "olive",
    },
    {
      index: 3,
      icon: product,
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
      color: "crimson",
    },
    {
      index: 4,
      icon: schedule,
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
      color: "secondary",
    },
  ];
  const [hoverItem, setHoverItem] = useState(null);
  const setHoverStateIndex = (index) => {
    setHoverItem(index == hoverItem ? null : index);
  };
  return (
    <>
      <section className="bg-primaryLight h-full px-0 sm:px-60 py-0 sm:py-4">
        <div className="bg-white p-10 rounded-lg">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <Image
              src={add}
              alt="add-your-own"
              className="object-contain w-8 sm:w-10 h-8 sm:h-10"
            />
            <p className="text-xl sm:text-2xl font-semibold">
              Add Your Listing
            </p>
          </div>
          <div className="pt-8 grid gap-5 grid-cols-1 sm:grid-cols-2">
            {features.map((feature) => {
              return (
                <div
                  key={feature.title}
                  onMouseEnter={() => setHoverStateIndex(feature.index)}
                  onMouseLeave={() => setHoverStateIndex(feature.index)}
                  className={`flex flex-col items-center sm:items-start justify-between gap-7 border-2 border-${
                    feature.color
                  } rounded-lg p-4 ${
                    feature.index == hoverItem
                      ? `text-white bg-${feature.color}`
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3 sm:gap-5 items-center justify-center sm:justify-start">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        className={`object-contain w-8 sm:w-10 h-8 sm:h-10 ${
                          feature.index == hoverItem
                            ? "brightness-0 invert"
                            : ""
                        }`}
                      />
                      <p className="text-lg sm:text-2xl  font-semibold">
                        {feature.title}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-center sm:text-start leading-5 sm:leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default AddList;
