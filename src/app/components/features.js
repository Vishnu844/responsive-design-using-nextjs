import React from "react";
import people from "../../../public/images/people.png";
import place from "../../../public/images/location.png";
import product from "../../../public/images/product.png";
import schedule from "../../../public/images/schedule.png";
import add from "../../../public/images/add.png";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: people,
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
      buttonText: "Connect",
    },
    {
      icon: place,
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
      buttonText: "Meet up",
    },
    {
      icon: product,
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
      buttonText: "Get it",
    },
    {
      icon: schedule,
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
      buttonText: "Attend",
    },
  ];
  return (
    <>
      <section className="bg-white p-8 sm:p-24 grid gap-5 grid-cols-1 sm:grid-cols-2">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start justify-between gap-7 border border-gray-300 rounded-lg p-6 sm:p-11"
            >
              <div className="flex flex-col gap-7">
                <div className="flex gap-3 sm:gap-5 items-center justify-center sm:justify-start">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="object-contain w-8 sm:w-10 h-8 sm:h-10"
                  />
                  <p className="text-lg sm:text-2xl  font-semibold">
                    {feature.title}
                  </p>
                </div>
                <p className="text-xs sm:text-lg font-light text-center sm:text-start leading-5 sm:leading-7">
                  {feature.description}
                </p>
              </div>

              <button className="w-full sm:w-32 h-10 p-2 border border-primary text-sm font-semibold text-primary rounded-lg">
                {feature.buttonText}
              </button>
            </div>
          );
        })}
      </section>
      <section className="p-8 sm:p-24 bg-secondaryLight">
        <div className="p-6 sm:p-11 flex flex-col gap-5 sm:gap-7 items-center sm:items-start justify-center sm:justify-start bg-white border rounded-lg">
          <div className="flex items-center gap-3 sm:gap-5">
            <Image
              src={add}
              alt="add-your-own"
              className="object-contain w-8 sm:w-10 h-8 sm:h-10"
            />
            <p className="text-lg sm:text-2xl font-semibold">Add your own</p>
          </div>
          <p className="text-xs sm:text-lg font-light tracking-wide sm:tracking-wider text-center sm:text-start leading-5 sm:leading-7">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button className="w-full sm:w-32 h-10 p-2 border border-primary text-sm font-semibold text-primary rounded-lg">
            Add new
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;
