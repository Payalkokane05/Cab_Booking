// import API from "./api";

// export const getAllCabs = async () => {
//   const res = await API.get("/cars");
//   return res.data;
// };

import axios from "axios";

const API = "http://localhost:8000/api/cars";

export const getAllCars = async () => {
  const response = await axios.get(API);
  return response.data;
};