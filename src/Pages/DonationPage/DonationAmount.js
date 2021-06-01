import React from "react";
import { Label } from "../../Components";
const data = ["$5.00", "$10.00", "$15.00", "$25.00", "$45.00"];

const DonationAmount = () => {
  return (
    <div className={"grid grid-cols-12 gap-4 px-5 md:px-20 py-2 "}>
      <div className={"col-span-6  md:col-span-2 align-baseline"}>
        <Label label="Donation Amount" />
      </div>
      <div
        className={"col-span-6 md:col-span-10 grid grid-cols-1 md:grid-cols-3"}
      >
        {data.map((value, index) => (
          <div className={"mb-2"} key={index}>
            <input type="radio" id={index} name="amount" value={value} />
            <label className={"pl-2 text-gray-400"} for={index}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationAmount;
