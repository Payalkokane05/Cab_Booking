import API from "./api";

export const registerUser = async (data) => {
  const res = await API.post("/users/register", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await API.post("/users/login", data);
  return res.data;
};