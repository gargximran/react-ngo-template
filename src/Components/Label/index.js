import "./style.css";

const Label = ({ label }) => {
  return (
    <div className="w-full  font-secondary ">
      <label className={"textInputFieldLabel"}>
        {label}
        <span className={"textRequired"}>*</span>
      </label>
    </div>
  );
};

export default Label;
