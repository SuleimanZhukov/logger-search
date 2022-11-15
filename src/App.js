import React, { useState } from "react";
import { getData } from "./services/fakeDataService";
import { paginate } from "./utils/paginate";
import Pagination from "./components/pagination";
import Header from "./components/header";
import Table from "./components/table";
import "./css/App.css";

function App() {
  const [data, setData] = useState(getData);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const dataPage = paginate(data, currentPage, pageSize);

  return (
    <div className="container">
      <Header />
      <Table data={dataPage} />
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
