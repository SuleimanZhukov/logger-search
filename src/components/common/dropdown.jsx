import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function CustomDropdown({ title, label, setLabel, dataItems }) {
  return (
    <th style={{ width: "14%" }}>
      <div>
        <Dropdown>
          <label>{title}</label>
          <Dropdown.Toggle
            style={{ width: "100%", marginTop: 0 }}
            variant="outline-primary"
            id="dropdown-basic"
          >
            {label === "" ? "Choose" : label}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ width: "100%" }}>
            {dataItems.map((item) => (
              <Dropdown.Item
                key={item.data}
                onClick={() => setLabel(item.data)}
              >
                {item.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </th>
  );
}

export default CustomDropdown;
