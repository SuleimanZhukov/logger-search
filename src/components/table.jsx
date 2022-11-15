import React from "react";

const Table = (props) => {
  const { data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Log ID</th>
          <th>Application Type</th>
          <th>Application ID</th>
          <th>Action</th>
          <th>Action Details</th>
          <th>Data:Time</th>
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
