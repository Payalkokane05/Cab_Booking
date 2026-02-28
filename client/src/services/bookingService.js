import API from "./api";

export const createBooking = async (data) => {
  const res = await API.post("/bookings", data);
  return res.data;
};

export const getMyBookings = async () => {
  const res = await API.get("/bookings/my");
  return res.data;
};