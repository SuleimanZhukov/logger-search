import React, { useEffect, useState } from "react";
import { getData } from "./services/fakeDataService";
import dataService from "./services/dataService";
import { paginate } from "./utils/paginate";
import Pagination from "./components/pagination";
import Header from "./components/header";
import Table from "./components/table";
import _ from "lodash";
import "./css/App.css";

function App() {
  const [data, setData] = useState(getData);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    column: "logId",
    order: "asc",
  });

  const [searchInput, setSearchInput] = useState({
    employeeName: 0,
    actionType: "",
    applicationType: "",
    fromDate: "",
    toDate: "",
    applicationId: "",
  });

  useEffect(() => {
    const filtered = searchInput.employeeName
      ? data.filter((i) => i.logId === searchInput.employeeName)
      : data;

    const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);

    setData(sorted);
  }, [searchInput, sortColumn]);

  const handleSearch = (
    e,
    name,
    actionType,
    applicationType,
    fromDate,
    toDate,
    applicationId
  ) => {
    e.preventDefault();

    setSearchInput({
      employeeName: name === "" ? 0 : parseInt(name),
      actionType: name === "" ? 0 : actionType,
      applicationType: name === "" ? 0 : applicationType,
      fromDate: name === "" ? 0 : fromDate,
      toDate: name === "" ? 0 : toDate,
      applicationId: name === "" ? 0 : applicationId,
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (newSortColumn) => {
    setSortColumn(newSortColumn);
  };

  const dataPage = paginate(data, currentPage, pageSize);

  return (
    <div className="topContainer">
      <Header handleSearch={handleSearch} />
      <div className="container">
        <Table data={dataPage} sortColumn={sortColumn} onSort={handleSort} />
        <Pagination
          itemsCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
export default App;
