import React from "react";

function TableHead({ sortColumn, onSort }) {
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

  const renderIcon = (column) => {
    if (column !== sortColumn.column) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        <th onClick={() => raiseSort("logId")}>Log ID {renderIcon("logId")}</th>
        <th onClick={() => raiseSort("applicationType")}>
          Application Type {renderIcon("applicationType")}
        </th>
        <th onClick={() => raiseSort("applicationId")}>
          Application ID {renderIcon("applicationId")}
        </th>
        <th onClick={() => raiseSort("actionType")}>
          Action {renderIcon("actionType")}
        </th>
        <th onClick={() => raiseSort("")}>Action Details {renderIcon("")}</th>
        <th onClick={() => raiseSort("creationTimestamp")}>
          Data : Time {renderIcon("creationTimestamp")}
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
