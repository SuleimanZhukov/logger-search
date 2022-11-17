import axios from "axios";

export const api = axios.create({
  baseURL: "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f",
});

export const fetchData = async () => {
  const request = await api.get("");
  return request.data.result.auditLog;
};
