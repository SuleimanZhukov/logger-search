import React, { useEffect, useState } from "react";
import { getData } from "./services/fakeDataService";
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

  const [searchInput, setSearchInput] = useState({ employeeName: 0 });

  useEffect(() => {
    const filtered = searchInput.employeeName
      ? data.filter((i) => i.logId === searchInput.employeeName)
      : data;

    const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);

    setData(sorted);
  }, [searchInput, sortColumn]);

  const handleSearch = (e, name) => {
    e.preventDefault();

    setSearchInput({
      employeeName: name === "" ? 0 : parseInt(name),
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (newSortColumn) => {
    setSortColumn(newSortColumn);
    // const newSortColumn = { ...sortColumn };
    // if (newSortColumn.column === column) {
    //   newSortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    // } else {
    //   newSortColumn.column = column;
    //   newSortColumn.order = "asc";
    // }
    // setSortColumn(newSortColumn);
  };

  const dataPage = paginate(data, currentPage, pageSize);

  return (
    <div className="container">
      <Header handleSearch={handleSearch} />
      <Table data={dataPage} sortColumn={sortColumn} onSort={handleSort} />
      <Pagination
        itemsCount={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default App;
