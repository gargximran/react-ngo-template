import React from "react";
import leftImage from "../../../Assets/Images/leftImage.jpg";
import "./style.css";
const SubHelpingTodaySection = () => {
  return (
    <div className="subVolunteerSection-container grid grid-cols-2">
      <div className="subVolunteerSection-image-container col-span-2 md:col-span-1">
        <img src={leftImage} alt="" className=" w-full" />
      </div>

      <div className="col-span-2 md:col-span-1 md:pt-12 pt-6 lg:pt-24 lg:pr-20 subVolunteerSection-content w-4/5 mx-auto md:w-full">
        <p className="text-gray-500 uppercase mb-5"> volunteer</p>
        <h1 className="text-3xl lg:text-4xl mb-4">
          Helping Today. Helping Tomorrow <span className="span">Charity</span>
        </h1>
        <p className="mb-5 text-gray-500">
          Join our community to become a volunteer and you can devote your life
          to helping others
        </p>
        <button className="bg-secondary px-7 py-2 rounded-lg text-white focus:outline-none border-none hover:bg-primary duration-300">
          Join us !
        </button>
      </div>
    </div>
  );
};

export default SubHelpingTodaySection;
