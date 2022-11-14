import React from "react";

const InputComponent = ({ label }) => {
  return (
    <div className="form-group">
      <label htmlFor="input-field">{label}</label>
      <input
        className="form-control"
        id="input-field"
        placeholder="e.g Admin.User"
      />
    </div>
  );
};

export default InputComponent;
