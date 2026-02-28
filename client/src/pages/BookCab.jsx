import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBooking } from "../services/bookingService";
import Navbar from "../components/Navbar";

function BookCab() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createBooking({
        carId: id,
        pickupLocation: form.pickupLocation,
        dropLocation: form.dropLocation,
        pickupDate: form.pickupDate,
        pickupTime: form.pickupTime,
      });

      alert("Booking Successful 🚗");
      navigate("/bookings");
    } catch (error) {
      alert("Booking Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="card" style={{ width: "400px", margin: "auto" }}>
          <h2 style={{ marginBottom: "20px" }}>Book Your Ride</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="pickupLocation"
              placeholder="Pickup Location"
              onChange={handleChange}
              required
            />

            <input
              name="dropLocation"
              placeholder="Drop Location"
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="pickupDate"
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="pickupTime"
              onChange={handleChange}
              required
            />

            <button
              className="black-btn"
              style={{ width: "100%", marginTop: "10px" }}
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCab;