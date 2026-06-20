import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "placeholder:text-grey-4 rounded-sm rounded-b-xl p-3 shadow-md",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      className={className}
    />
  );
};

export default Input;
