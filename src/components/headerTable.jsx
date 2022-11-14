import React from "react";
import InputComponent from "./inputComponent";

const data = [
  "Employee Name",
  "Action type",
  "Application type",
  "From Data",
  "To Date",
  "Application ID",
];

const HeaderTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>
            <InputComponent label={data[0]} />
          </th>
          <th>
            <InputComponent label={data[1]} />
          </th>
          <th>
            <InputComponent label={data[2]} />
          </th>
          <th>
            <InputComponent label={data[3]} />
          </th>
          <th>
            <InputComponent label={data[4]} />
          </th>
          <th>
            <InputComponent label={data[5]} />
          </th>
          <th>
            <button className="btn btn-danger">Search </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default HeaderTable;
