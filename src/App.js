import React, { useEffect, useState } from "react";
import axios from "./services/axios";
import { getData } from "./services/fakeDataService";
import { paginate } from "./utils/paginate";
import Pagination from "./components/pagination";
import Header from "./components/header";
import Table from "./components/table";
import SearchContext from "./context/searchContext";
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
    fromDate: null,
    toDate: null,
    applicationId: "",
  });

  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get("");
    //   setData(request.data.result.auditLog);
    // }

    // fetchData();

    const filtered = searchInput.employeeName
      ? data.filter((i) => i.logId === searchInput.employeeName)
      : data;

    console.log("employeeName", searchInput.employeeName);

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

    // setSearchInput({
    //   employeeName: name === "" ? 0 : parseInt(name),
    //   actionType: actionType === "" ? "" : actionType,
    //   applicationType: applicationType === "" ? "" : applicationType,
    //   fromDate: fromDate === "" ? null : Date.parse(fromDate),
    //   toDate: toDate === "" ? null : Date.parse(toDate),
    //   applicationId: applicationId === "" ? 0 : parseInt(applicationId),
    // });
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
    <SearchContext.Provider
      value={{
        setSearchInput: setSearchInput,
      }}
    >
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
    </SearchContext.Provider>
  );
}
export default App;
