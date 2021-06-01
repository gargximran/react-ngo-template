import React from "react";
import DonationAmount from "./DonationAmount";
import DonationMethod from "./DonationMethod";
import DonationInterval from "./DonationInterval";
import DonationCampaign from "./DonationCampaign";
import DonationTextMessage from "./DonationTextMessage";
import DonationPersonalInfo from "./DonationPersonalInfo";
import DonationTitle from "./DonationTitle";

const SubDonationSection = () => {
  return (
    <div className={"w-screen md:w-11/12 mx-auto"}>
      <DonationTitle title={"Donation details"} />
      <DonationAmount />
      <DonationMethod />
      <DonationInterval />
      <DonationCampaign />
      <DonationTextMessage />
      <DonationPersonalInfo />
    </div>
  );
};

export default SubDonationSection;
