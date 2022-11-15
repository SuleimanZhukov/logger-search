import React from "react";
import InputComponent from "./inputComponent";
import Dropdown from "./dropdown";
import "../css/header.css";

const data = [
  "Employee Name",
  "Action type",
  "Application type",
  "From Data",
  "To Date",
  "Application ID",
];

const Header = ({ handleSearch, handleOnChange }) => {
  return (
    <form className="form" onSubmit={handleSearch}>
      <InputComponent
        label={data[0]}
        handleOnChange={(e) => handleOnChange(e)}
      />
      <InputComponent label={data[0]} />
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
