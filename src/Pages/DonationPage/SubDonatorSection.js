import React from "react";
import { TextInput } from "../../Components";
import DonationTitle from "./DonationTitle";
import DonatinSubmit from "./DonatinSubmit";

const SubDonatorSection = () => {
  return (
    <div className={"w-screen md:w-11/12 mx-auto "}>
      <DonationTitle title={"Donator details"} />
      <div
        className={
          " grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 px-5 md:px-20 py-2 "
        }
      >
        <TextInput label="First Name" />
        <TextInput label="Last Name" />
        <TextInput label="Email" type="email" />
        <TextInput label="Address" />
        <TextInput label="Postal / Zip code" type="number" />
      </div>
      <DonatinSubmit />
    </div>
  );
};

export default SubDonatorSection;
