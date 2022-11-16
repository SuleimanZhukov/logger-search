import React from "react";

function TextInput({ title, placeholder, setData }) {
  return (
    <th style={{ width: "14%" }}>
      <div className="form-group">
        <label htmlFor="input-field">{title}</label>
        <input
          className="form-control"
          id="input-field"
          placeholder={placeholder}
          onChange={(e) => setData(parseInt(e.target.value))}
        />
      </div>
    </th>
  );
}

export default TextInput;
