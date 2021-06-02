import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

function CustomSliderPrev({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="prev  absolute mr-3 h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg  grid place-items-center cursor-pointer bg-white hover:bg-secondary group duration-300"
    >
      <AiOutlineLeft className="group-hover:text-white text-secondary" />
    </div>
  );
}

export default CustomSliderPrev;
