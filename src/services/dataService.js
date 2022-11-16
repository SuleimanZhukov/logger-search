import axios from "axios";

const endpoint = "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f";

const getData = async () => {
  const { success } = axios.get(endpoint);
  return success;
};

export default {
  getData,
};
