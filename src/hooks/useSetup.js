import { useState } from "react";
import { getData } from "../services/fakeDataService";

export default function useSetup() {
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
  };
}
