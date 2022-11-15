import React from "react";

const Table = ({ data, sortColumn, onSort }) => {
  const raiseSort = (column) => {
    const newSortColumn = { ...sortColumn };
    if (newSortColumn.column === column) {
      newSortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      newSortColumn.column = column;
      newSortColumn.order = "asc";
    }

    onSort(newSortColumn);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => raiseSort("logId")}>Log ID</th>
          <th onClick={() => raiseSort("applicationType")}>Application Type</th>
          <th onClick={() => raiseSort("applicationId")}>Application ID</th>
          <th onClick={() => raiseSort("actionType")}>Action</th>
          <th onClick={() => raiseSort("")}>Action Details</th>
          <th onClick={() => raiseSort("creationTimestamp")}>Data:Time</th>
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
