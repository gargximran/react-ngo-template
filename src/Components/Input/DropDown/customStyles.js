const customStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: 10,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%",
    display: "flex",
    border: "1px solid rgba(209, 213, 219 , 1)",
    borderRadius: "1.5rem",
    borderWidth: "1px",
    fontSize: "16px",
    marginTop: "0.75rem",
    cursor: "pointer",
  }),
  placeholder: () => ({
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    color: "#9CA3C1",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export default customStyles;
