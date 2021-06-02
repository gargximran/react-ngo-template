import React from "react";
import "./style.css";
import ngo_image from "../../Assets/Images/ngo_donation.jpg";

const CampaignCard = ({ completed,className }) => {
  return (
    <div className={className}>
      <div className="campaignCard-image-container">
        <img src={ngo_image} alt="ngo_image" className="campaignCard-image" />
        <div className="campaignCard-image-badge">
          <p>Education</p>
        </div>
      </div>

      <div className="campaignCard-content mt-10">
        <h1 className="text-2xl">Help Children Rise out of Poverty</h1>
        <p className="text-gray-500 pt-5">
          We help local nonprofits access the funding. tools,traning and support
          they...
        </p>
      </div>

      <div className="campaignCard-progressbar-container">
        <div
          className="campaignCard-progressbar-bar"
          style={{ width: completed + "%" }}
        >
          <p className="campaignCard-progressbar-percentage">
            {completed + "%"}
          </p>
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-3">
        <div className="border-r-2 col-span-1 text-center">
          <h1 className="text-sm text-gray-600">Goals</h1>
          <p className="text-lg text-secondary">$20000</p>
        </div>
        <div className="border-r-2 col-span-1 text-center">
          <h1 className="text-sm text-gray-600">Raised</h1>
          <p className="text-lg text-secondary">$20000</p>
        </div>
        <div className="col-span-1 text-center">
          <h1 className="text-sm text-gray-600">To Go</h1>
          <p className="text-lg text-secondary">$20000</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
