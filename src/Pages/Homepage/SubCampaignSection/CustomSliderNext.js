import React from "react"
import { AiOutlineRight } from "react-icons/ai";

const CustomSliderNext=(props)=> {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="next  absolute h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg  grid place-items-center cursor-pointer bg-white hover:bg-secondary group duration-300"
    >
      <AiOutlineRight className="group-hover:text-white text-secondary" />
    </div>
  );
}

export default CustomSliderNext