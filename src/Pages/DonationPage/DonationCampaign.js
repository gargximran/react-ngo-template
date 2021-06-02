import React from "react";
import { Label, DropDown } from "../../Components";
const DonationCampaign = () => {
  return (
    <div
      className={"grid grid-cols-12 gap-4 px-5 md:px-20 py-2  items-baseline"}
    >
      <div className={"col-span-4 md:col-span-2 "}>
        <Label label="Campaigns" />
      </div>
      <div className={"col-span-8 md:col-span-10 "}>
        <DropDown />
        <p className={"text-gray-500 text-xs pl-2 mt-1 font-semibold"}>
          SELECT THE CAMPAIGN YOU WOULD LIKE TO CONTRIBUTE TO
        </p>
      </div>
    </div>
  );
};

export default DonationCampaign;
