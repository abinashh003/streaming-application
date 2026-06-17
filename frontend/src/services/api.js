import axios from "axios";

const api = axios.create({
  baseURL: "http://54.91.27.248:5000/api"
});

export default api;