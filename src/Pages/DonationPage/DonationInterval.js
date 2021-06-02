import React from "react";
import { Label, DropDown } from "../../Components";
const method = [
  { value: "One-time", label: "One-time" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Yearly", label: "Yearly" },
];

const DonationInterval = () => {
  return (
    <div
      className={"grid grid-cols-12 gap-4 px-5 md:px-20 py-2  items-baseline"}
    >
      <div className={"col-span-4 md:col-span-2 "}>
        <Label label="Recurrence" />
      </div>
      <div className={"col-span-8 md:col-span-10 "}>
        <DropDown options={method} />
        <p className={"text-gray-500 text-xs pl-2 mt-1 font-semibold"}>
          SELECT THE PAYMENT INTERVAL
        </p>
      </div>
    </div>
  );
};

export default DonationInterval;
