import React from "react";

const InputComponent = ({ label, handleOnChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="input-field">{label}</label>
      <input
        className="form-control"
        id="input-field"
        placeholder="e.g Admin.User"
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};

export default InputComponent;
