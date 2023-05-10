import axios from "axios";

export const axiosInstance = axios.create({
  //baseURL: "https://cognoscente.herokuapp.com/api/",
  baseURL: "http://localhost:3000/api/",
});
