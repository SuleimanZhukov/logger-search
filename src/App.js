import React, { useEffect, useState } from "react";
import { getData } from "./services/fakeDataService";
import { paginate } from "./utils/paginate";
import Pagination from "./components/pagination";
import Header from "./components/header";
import Table from "./components/table";
import "./css/App.css";

function App() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ column: "", order: "asc" });

  const [searchInput, setSearchInput] = useState({ employeeName: 0 });

  useEffect(() => {
    setData(getData);
  }, []);

  const handleOnChange = (e) => {
    setSearchInput({ employeeName: parseInt(e.target.value) });
    setCurrentPage(1);
  };

  const handleSearch = () => {
    const filtered = searchInput.employeeName
      ? data.filter((i) => i.logId === searchInput.employeeName)
      : data;
    setData(filtered);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (column) => {
    console.log(column);
  };

  const dataPage = paginate(data, currentPage, pageSize);

  return (
    <div className="container">
      <Header handleSearch={handleSearch} handleOnChange={handleOnChange} />
      <Table data={dataPage} onSort={handleSort} />
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
