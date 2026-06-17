import axios from "axios";

const api = axios.create({
  baseURL: "http://100.58.96.199:5000/api"
});

export default api;