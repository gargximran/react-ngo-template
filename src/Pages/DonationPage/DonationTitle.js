import React from "react";

const DonationTitle = ({ title }) => {
  return (
    <p
      className={
        "text-lg md:text-2xl font-semibold my-4 mt-4 mb-6 px-5 md:px-20 py-2 text-gray-600"
      }
    >
      {title}
    </p>
  );
};

export default DonationTitle;
