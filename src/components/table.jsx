import React from "react";
import TableHead from "./tableHead";
import Pagination from "./pagination";

const Table = ({ data, sortColumn, onSort }) => {
  return (
    <table className="table">
      <TableHead sortColumn={sortColumn} onSort={onSort} />
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
      </tbody>
    </table>
  );
};

export default Table;
