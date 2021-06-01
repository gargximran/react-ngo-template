import React from "react";
import { Label } from "../../Components";
const payment = [" Online payment", "  Offline payment"];
const DonationMethod = () => {
  return (
    <div className={"grid grid-cols-12 gap-4 px-5 md:px-20 py-2 "}>
      <div className={"col-span-6  md:col-span-2 align-baseline"}>
        <Label label="Payment Method" />
      </div>
      <div
        className={"col-span-6 md:col-span-10 grid grid-cols-1 md:grid-cols-3"}
      >
        {payment.map((value, index) => (
          <div className={"mb-2"} key={index}>
            <input type="radio" id={index} name="payment" value={value} />
            <label className={"pl-2 text-gray-400"} for={index}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationMethod;
