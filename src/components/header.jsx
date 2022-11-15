import React, { useState } from "react";
import InputComponent from "./inputComponent";
import Dropdown from "./dropdown";
import App from "../App";
import "../css/header.css";

const data = [
  "Employee Name",
  "Action type",
  "Application type",
  "From Data",
  "To Date",
  "Application ID",
];

const Header = ({ handleSearch }) => {
  const [name, setName] = useState("");

  return (
    <form className="form" onSubmit={(e) => handleSearch(e, name)}>
      <div className="form-group">
        <label htmlFor="input-field">Employee Name</label>
        <input
          className="form-control"
          id="input-field"
          placeholder="e.g Admin.User"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Dropdown label={data[1]} />
      <InputComponent label={data[0]} />
      <InputComponent label={data[0]} />
      <InputComponent label={data[0]} />
      <InputComponent label={data[0]} />
      <input type="submit" className="btn btn-outline-primary" value="Search" />
    </form>

    // <form>
    //   <table className="table">
    //     <tbody>
    //       <tr>
    //         <th>
    //           <InputComponent label={data[0]} />
    //         </th>
    //         <th>
    //           <Dropdown label={data[1]} />
    //         </th>
    //         <th>
    //           <Dropdown label={data[2]} />
    //         </th>
    //         <th>
    //           <InputComponent label={data[3]} />
    //         </th>
    //         <th>
    //           <InputComponent label={data[4]} />
    //         </th>
    //         <th>
    //           <InputComponent label={data[5]} />
    //         </th>
    //         <th>
    //           <button className="btn btn-outline-primary">Search</button>
    //         </th>
    //       </tr>
    //     </tbody>
    //   </table>
    // </form>
  );
};

export default Header;
