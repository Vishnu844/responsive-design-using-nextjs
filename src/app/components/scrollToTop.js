"use client";

import React, { useState } from "react";
import upArrow from "../../../public/images/arrow-up.png";
import Image from "next/image";
import Link from "next/link";

const ScrollToTop = () => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <>
      <Link href="#">
        <button
          className="fixed bottom-20 right-24 bg-white w-10 h-10 rounded-full p-3 shadow-md focus:bg-primary"
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        >
          <Image src={upArrow} alt="up-arrow" className="object-contain" />
        </button>
      </Link>
      <p
        className={`fixed bottom-10 right-10 w-26 text-xs font-medium text-primary bg-white p-1.5 rounded shadow-md ${
          hoverState ? "" : "hidden"
        }`}
      >
        Go to Top {"("}ctrl + home{")"}
      </p>
    </>
  );
};

export default ScrollToTop;
