import React, { useEffect } from "react";
import useSetup from "./hooks/useSetup";
import { fetchData } from "./services/axios";
import { paginate } from "./utils/paginate";
import Pagination from "./components/pagination";
import Header from "./components/header";
import Table from "./components/table";
import _ from "lodash";
import "./css/App.css";

function App() {
  const states = useSetup();

  useEffect(() => {
    fetchData()
      .then((json) => {
        states.setData(json);
        return json;
      })
      .then((json) => {
        let filtered;
        if (states.searchInput.fromDate && states.searchInput.toDate) {
          filtered = _.filter(json, (i) => {
            if (
              Date.parse(i.creationTimestamp) > states.searchInput.fromDate &&
              Date.parse(i.creationTimestamp) < states.searchInput.toDate
            ) {
              if (states.searchInput.employeeName) {
                if (i.logId === states.searchInput.employeeName) {
                  return i;
                }
              } else {
                return i;
              }
            }
          });
        }

        const sorted = _.orderBy(
          filtered,
          [states.sortColumn.column],
          [states.sortColumn.order]
        );

        states.setSearchResults(sorted);
      });
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
      employeeName: name === "" ? null : parseInt(name),
      actionType: actionType === "" ? null : actionType,
      applicationType: applicationType === "" ? null : applicationType,
      fromDate: fromDate === "" ? null : Date.parse(fromDate),
      toDate: toDate === "" ? null : Date.parse(toDate),
      applicationId: applicationId === "" ? null : parseInt(applicationId),
    });
    states.setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    states.setCurrentPage(page);
  };

  const handleSort = (newSortColumn) => {
    states.setSortColumn(newSortColumn);
  };

  const dataPage = paginate(
    states.searchResults,
    states.currentPage,
    states.pageSize
  );

  return (
    <div className="topContainer">
      <Header handleSearch={handleSearch} />
      <div className="container">
        <Table
          data={dataPage}
          sortColumn={states.sortColumn}
          onSort={handleSort}
        />
        <Pagination
          itemsCount={states.searchResults?.length}
          pageSize={states.pageSize}
          currentPage={states.currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
export default App;
