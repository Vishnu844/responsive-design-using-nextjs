import Image from "next/image";
import React from "react";
import ctaImage from "../../../public/images/CTA-image.png";

const CTA = () => {
  return (
    <section className="bg-secondaryLight px-8 pt-8 pb-8 sm:px-24 sm:pt-24">
      <div className="flex flex-col gap-12 sm:gap-28 items-center sm:items-start">
        <div>
          <h2 className="text-lg sm:text-4xl font-medium italic">
            Your <span className="text-primary">Hobby</span>, Your{" "}
            <span className="text-secondary">Community...</span>
          </h2>
          <button className="w-24 h-7 text-sm sm:text-xl sm:w-36 sm:h-12 bg-primary text-white rounded-lg mt-8 p-1">
            Get Started
          </button>
        </div>
        <Image src={ctaImage} alt="cta-image" className="object-contain" />
      </div>
    </section>
  );
};

export default CTA;
