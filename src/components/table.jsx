import React from "react";

const Table = ({ data, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("logId")}>Log ID</th>
          <th onClick={() => onSort("applicationType")}>Application Type</th>
          <th onClick={() => onSort("applicationId")}>Application ID</th>
          <th onClick={() => onSort("actionType")}>Action</th>
          <th onClick={() => onSort("")}>Action Details</th>
          <th onClick={() => onSort("creationTimestamp")}>Data:Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.logId}>
            <td>{item.logId}</td>
            <td>{item.applicationType}</td>
            <td>{item.applicationId}</td>
            <td>{item.actionType}</td>
            <td>N/A</td>
            <td>{item.creationTimestamp}</td>
          </tr>
        ))}
        {/* <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
