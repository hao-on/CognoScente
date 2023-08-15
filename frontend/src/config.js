import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://web-production-c478.up.railway.app/api",
  // baseURL: "http://localhost:3000/api/",
});
