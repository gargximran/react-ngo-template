import React, { useState } from "react";
import Select from "react-select";
import customStyles from "./customStyles";
import "./style.css";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const DropDown = ({ options = defaultOptions }) => {
  const [selectedOption, setselectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setselectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <Select
      styles={customStyles}
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
};

export default DropDown;
