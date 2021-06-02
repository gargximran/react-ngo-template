import React from "react";
import SubDonationSection from "./SubDonationSection";
import SubDonatorSection from "./SubDonatorSection";

const Donation = () => {
  return (
    <div style={{ marginTop: "-20px" }}>
      <SubDonationSection />
      <br />
      <SubDonatorSection />
    </div>
  );
};

export default Donation;
