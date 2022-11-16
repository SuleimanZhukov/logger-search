import React, { useState } from "react";
import InputComponent from "./inputComponent";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Datepicker from "react-datepicker";
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
  const [actionType, setActionType] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [applicationId, setApplicationId] = useState("");

  return (
    <form
      className="form"
      onSubmit={(e) =>
        handleSearch(
          e,
          name,
          actionType,
          applicationType,
          fromDate,
          toDate,
          applicationId
        )
      }
    >
      <table className="table table-fixed">
        <tbody>
          <tr>
            <th style={{ width: "14%" }}>
              <div className="form-group">
                <label htmlFor="input-field">Employee Name</label>
                <input
                  className="form-control"
                  id="input-field"
                  placeholder="e.g. Admin.User"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </th>
            <th style={{ width: "14%" }}>
              <div>
                <Dropdown>
                  <label>Action Type</label>
                  <Dropdown.Toggle
                    style={{ width: "100%" }}
                    variant="outline-primary"
                    id="dropdown-basic"
                  >
                    {actionType === "" ? "Choose" : actionType}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ width: "100%" }}>
                    <Dropdown.Item
                      onClick={() => setActionType("DARI_REFRESH_TOKEN")}
                    >
                      Dari Refresh Token
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="INITIATE_APPLICATION"
                      onClick={() => setActionType("INITIATE_APPLICATION")}
                    >
                      Initiate Application
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setActionType("SUBMIT_APPLICATION")}
                    >
                      Submit Application
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setActionType("DARI_APP_LOGIN")}
                    >
                      App Login
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>
            <th style={{ width: "14%" }}>
              <div>
                <label>{data[2]}</label>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ width: "100%" }}
                    variant="outline-primary"
                    id="dropdown-basic"
                  >
                    {applicationType === "" ? "Choose" : applicationType}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ width: "100%" }}>
                    <Dropdown.Item
                      onClick={() => setApplicationType("LEASE_REGISTRATION")}
                    >
                      Lease Registration
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setApplicationType("CERT_TITLE_DEED_PLOT")}
                    >
                      Cert Title Deed Plot
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setApplicationType("ADD_POA")}
                    >
                      Add POA
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>
            <th style={{ width: "14%", paddingTop: "12px" }}>
              <div>
                <label>From Date</label>
                <Datepicker
                  selected={fromDate}
                  onChange={(e) => setFromDate(e)}
                />
              </div>
            </th>
            <th style={{ width: "14%", paddingTop: "12px" }}>
              <div>
                <label>To Date</label>
                <Datepicker selected={toDate} onChange={(e) => setToDate(e)} />
              </div>
            </th>
            <th style={{ width: "14%" }}>
              <div className="form-group">
                <label htmlFor="input-field">Application ID</label>
                <input
                  className="form-control"
                  id="input-field"
                  placeholder="e.g. 224194/2021"
                  onChange={(e) => setApplicationId(e.target.value)}
                />
              </div>
            </th>
            <th style={{ width: "16%" }}>
              <input
                style={{ width: "100%" }}
                type="submit"
                className="btn btn-outline-primary"
                value="Search"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </form>

    // <form className="form" onSubmit={(e) => handleSearch(e, name)}>
    //   <div className="form-group">
    //     <label htmlFor="input-field">Employee Name</label>
    //     <input
    //       className="form-control"
    //       id="input-field"
    //       placeholder="e.g Admin.User"
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //   </div>
    //   {/* <Dropdown label={data[1]} /> */}
    //   <div>
    //     <label>{data[1]}</label>
    //     <Dropdown>
    //       <Dropdown.Toggle
    //         variant="outline-primary"
    //         id="dropdown-basic"
    //       ></Dropdown.Toggle>
    //       <Dropdown.Menu>
    //         <Dropdown.Item>First</Dropdown.Item>
    //         <Dropdown.Item>second</Dropdown.Item>
    //         <Dropdown.Item>Third</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>
    //   </div>
    //   <div>
    //     <label>{data[2]}</label>
    //     <Dropdown>
    //       <Dropdown.Toggle
    //         variant="outline-primary"
    //         id="dropdown-basic"
    //       ></Dropdown.Toggle>
    //       <Dropdown.Menu>
    //         <Dropdown.Item>First</Dropdown.Item>
    //         <Dropdown.Item>second</Dropdown.Item>
    //         <Dropdown.Item>Third</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>
    //   </div>
    //   {/* <InputComponent label={data[2]} /> */}
    //   <InputComponent label={data[3]} />
    //   <InputComponent label={data[4]} />
    //   <InputComponent label="Application ID" />
    //   <input type="submit" className="btn btn-outline-primary" value="Search" />
    // </form>
  );
};

export default Header;
