import React from "react";
import Datepicker from "react-datepicker";

function CustomDatepicker({ title, selected, onChange }) {
  return (
    <th style={{ width: "14%", paddingTop: "12px" }}>
      <div>
        <label>{title}</label>
        <Datepicker
          selected={selected}
          onChange={(e) => onChange(e)}
          placeholderText="Select date"
        />
      </div>
    </th>
  );
}

export default CustomDatepicker;
