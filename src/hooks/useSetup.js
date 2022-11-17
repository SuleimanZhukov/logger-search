import { useState } from "react";

export default function useSetup() {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    column: "logId",
    order: "asc",
  });
  const [searchInput, setSearchInput] = useState({
    employeeName: null,
    actionType: null,
    applicationType: null,
    fromDate: null,
    toDate: null,
    applicationId: null,
  });
  const [searchResults, setSearchResults] = useState([]);

  return {
    data,
    setData,
    pageSize,
    currentPage,
    setCurrentPage,
    sortColumn,
    setSortColumn,
    searchInput,
    setSearchInput,
    searchResults,
    setSearchResults,
  };
}
