import React from "react"
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./style.css"

const CustomSliderNext=(props)=> {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="next  absolute md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg  grid place-items-center cursor-pointer bg-white hover:bg-secondary group duration-300"
    >
      <NavigateNextIcon style={{ fontSize: "2rem" }} className="group-hover:text-white text-secondary"/>
    </div>
  );
}

export default CustomSliderNext