import React from "react";

const Dropdown = (props) => {
  const { label } = props;

  return (
    <div className="dropdown show">
      <label>{label}</label>
      <select>
        <option value="first">First</option>
        <option value="second">Second</option>
      </select>
    </div>
  );
};

export default Dropdown;
