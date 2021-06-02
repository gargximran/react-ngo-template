import React from "react";
import { Label, TextAreaInput } from "../../Components";
const DonationTextMessage = () => {
  return (
    <div className={"grid grid-cols-12 gap-4 px-5 md:px-20 py-2  items-start"}>
      <div className={"col-span-4 md:col-span-2 mt-2"}>
        <Label label="Message" />
      </div>
      <div className={"col-span-8 md:col-span-10"}>
        <TextAreaInput placeholderText="Your custom message text" />
      </div>
    </div>
  );
};

export default DonationTextMessage;
