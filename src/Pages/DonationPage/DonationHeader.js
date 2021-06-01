import React from "react";

const DonationHeader = () => {
  const logo =
    "https://children-charity.cmsmasters.net/wp-content/themes/children-charity/theme-vars/theme-style/img/logo.png";

  return (
    <div className={"bg-donation h-screen/2 md:h-screen/45 "}>
      <div
        className={
          "my-4 mt-4 mb-6 px-5 md:px-20 py-2 pt-6 grid grid-cols-1 w-screen md:w-11/12 mx-auto"
        }
      >
        <img src={logo} alt="logo" className={"mt-8"} />
        <p className={"text-xl md:text-3xl text-white my-4"}>
          Donate Confirmation
        </p>
      </div>
    </div>
  );
};

export default DonationHeader;
