import React from "react";
import { CampaignCard } from "../../../Components";
import Slider from "react-slick";
import "./style.css";
import CustomSliderNext from "./CustomSliderNext"
import CustomSliderPrev from "./CustomSliderPrev"

const SubCampaignSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomSliderNext />,
    prevArrow: <CustomSliderPrev/>,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 px-5">

        <h1 className="text-xl md:text-head-7 font-secondary capitalize mb-10 md:pl-5"> Introducing our <span className="text-primary">campaign</span></h1>
      <Slider {...settings} >
        <CampaignCard completed={72} className="sm:w-11/12 mx-auto p-5 bg-white" />
        <CampaignCard completed={50} className=" sm:w-11/12 mx-auto p-5 bg-white" />
        <CampaignCard completed={28} className=" sm:w-11/12 mx-auto p-5 bg-white" />
        <CampaignCard completed={32} className=" sm:w-11/12 mx-auto p-5 bg-white" />
        <CampaignCard completed={98} className=" sm:w-11/12 mx-auto p-5 bg-white" />
        <CampaignCard completed={22} className=" sm:w-11/12 mx-auto p-5 bg-white" />
      </Slider>
    </div>
  );
};

export default SubCampaignSection;
