import React, { useEffect, useState } from "react";
import Table from "./components/table";
import { getData } from "./services/fakeDataService";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import "./css/App.css";

function App() {
  const [data, setData] = useState(getData);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPage = paginate(data, currentPage, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Table />
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
