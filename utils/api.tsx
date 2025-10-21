import axios from "axios";
import constant from "./constant";

const api = axios.create({
  baseURL: constant.baseUrl,
});

export default api;
