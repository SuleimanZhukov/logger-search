import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import CustomDatepicker from "./common/datepicker";
import CustomDropdown from "./common/dropdown";
import TextInput from "./common/textInput";
import "../css/header.css";

const data = [
  "Employee Name",
  "Action type",
  "Application type",
  "From Data",
  "To Date",
  "Application ID",
];

const actionTypes = [
  { data: "DARI_REFRESH_TOKEN", label: "Dari Refresh Token" },
  { data: "INITIATE_APPLICATION", label: "Initiate Application" },
  { data: "SUBMIT_APPLICATION", label: "Submit Application" },
  { data: "DARI_APP_LOGIN", label: "App Login" },
];

const applicationTypes = [
  { data: "LEASE_REGISTRATION", label: "Lease Registration" },
  { data: "CERT_TITLE_DEED_PLOT", label: "Cert Title Deed Plot" },
  { data: "ADD_POA", label: "Add POA" },
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
            <TextInput
              title="Employee Name"
              placeholder="e.g. Admin.User"
              setData={setName}
            />
            <CustomDropdown
              title="Action Type"
              label={actionType}
              setLabel={setActionType}
              dataItems={actionTypes}
            />
            <CustomDropdown
              title="Application Type"
              label={applicationType}
              setLabel={setApplicationType}
              dataItems={applicationTypes}
            />
            <CustomDatepicker
              title="From Date"
              selected={fromDate}
              onChange={setFromDate}
            />
            <CustomDatepicker
              title="To Date"
              selected={toDate}
              onChange={setToDate}
            />
            <TextInput
              title="Application ID"
              placeholder="e.g. 224194/2021"
              setData={setApplicationId}
            />
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
  );
};

export default Header;
