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
    toDate: null,
    fromDate: null,
    actionType: null,
    applicationType: null,
    applicationId: null,
    logId: null,
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
