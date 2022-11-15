import React from "react";

const Dropdown = (props) => {
  const { label } = props;

  return (
    <div className="dropdown show">
      <label htmlFor="dropdownMenuLink">{label}</label>
      <a
        className="btn btn-secondary dropdown-toggle"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Choose
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item">Action</a>
        <a className="dropdown-item">Another action</a>
        <a className="dropdown-item">Something else here</a>
      </div>
    </div>
  );
};

export default Dropdown;
