import React from "react";
import { Label } from "../../Components";
const DonationPersonalInfo = () => {
  return (
    <div
      className={"grid grid-cols-12 gap-4 px-5 md:px-20 py-2  items-baseline"}
    >
      <div className={"col-span-4 md:col-span-2 align-baseline"}>
        <Label label="Anonymous donation?" />
      </div>
      <div className={"col-span-8 md:col-span-10"}>
        <input
          type="checkbox"
          id="personalInfo"
          name="personalInfo"
          value="Bike"
          size="small"
        />
        <label
          for="personalInfo"
          className={"text-gray-500 text-xs md:text-sm pl-2 font-semibold"}
        >
          CHECK THIS BOX TO HIDE YOUR PERSONAL INFO IN OUR DONATORS LIST
        </label>
      </div>
    </div>
  );
};

export default DonationPersonalInfo;
