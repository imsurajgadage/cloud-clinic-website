import React from "react";
import ArrowUp from "../../assets/Icons/ArrowUp";

const ScrollButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className="bg-gray-500 rounded-full fixed right-1 max-md:right-5 !z-50 bottom-10 animate-scaleup"
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollButton;
