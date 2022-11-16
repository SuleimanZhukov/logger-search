import React, { useEffect, useState } from "react";
import useSetup from "./hooks/useSetup";
import axios from "./services/axios";
import { paginate } from "./utils/paginate";
import Pagination from "./components/pagination";
import Header from "./components/header";
import Table from "./components/table";
import SearchContext from "./context/searchContext";
import _ from "lodash";
import "./css/App.css";

function App() {
  const states = useSetup();

  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get("");
    //   states.setData(request.data.result.auditLog);
    // }

    // fetchData();

    const filtered = states.searchInput.employeeName
      ? states.data.filter((i) => i.logId === states.searchInput.employeeName)
      : states.data;

    console.log("employeeName", states.searchInput.employeeName);

    const sorted = _.orderBy(
      filtered,
      [states.sortColumn.column],
      [states.sortColumn.order]
    );

    states.setData(sorted);
  }, [states.searchInput, states.sortColumn]);

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

    states.setSearchInput({
      employeeName: name === "" ? 0 : parseInt(name),
      actionType: actionType === "" ? "" : actionType,
      applicationType: applicationType === "" ? "" : applicationType,
      fromDate: fromDate === "" ? null : Date.parse(fromDate),
      toDate: toDate === "" ? null : Date.parse(toDate),
      applicationId: applicationId === "" ? 0 : parseInt(applicationId),
    });
    states.setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    states.setCurrentPage(page);
  };

  const handleSort = (newSortColumn) => {
    states.setSortColumn(newSortColumn);
  };

  const dataPage = paginate(states.data, states.currentPage, states.pageSize);

  return (
    <SearchContext.Provider
      value={{
        setSearchInput: states.setSearchInput,
      }}
    >
      <div className="topContainer">
        <Header handleSearch={handleSearch} />
        <div className="container">
          <Table
            data={dataPage}
            sortColumn={states.sortColumn}
            onSort={handleSort}
          />
          <Pagination
            itemsCount={states.data.length}
            pageSize={states.pageSize}
            currentPage={states.currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </SearchContext.Provider>
  );
}
export default App;
