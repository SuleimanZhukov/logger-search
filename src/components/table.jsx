import React from "react";
import HeaderTable from "./headerTable";
import MainTable from "./mainTable";

function Table(props) {
  return (
    <div>
      <HeaderTable />
      <MainTable />
    </div>
  );
}

export default Table;
