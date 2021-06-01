import "./style.css";

const TextInput = ({
  onChange,
  label,
  name,
  placeholderText,
  type = "text",
}) => {
  return (
    <div className="w-full relative font-secondary ">
      {label && (
        <label className={"primaryInputFieldLabel   w-full text-paragraph"}>
          {label}
          <span className={"textRequired"}>*</span>
        </label>
      )}
      <input
        name={name}
        onChange={(e) => onChange && onChange(e)}
        placeholder={placeholderText}
        type={type}
        className="textInputField"
      />
    </div>
  );
};

export default TextInput;
