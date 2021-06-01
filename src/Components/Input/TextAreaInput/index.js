import React from "react";
import "./style.css";

const TextAreaInput = ({ onChange, label, name, placeholderText }) => {
  return (
    <div className="w-full relative font-secondary ">
      <textarea
        name={name}
        onChange={(e) => onChange && onChange(e)}
        placeholder={placeholderText}
        type="text"
        rows="7"
        className="textInputField"
      />
    </div>
  );
};

export default TextAreaInput;
