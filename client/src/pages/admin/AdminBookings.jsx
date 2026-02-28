import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/bookings"
      );
      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/bookings/${id}`
      );
      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#e6d8b5",
          minHeight: "100vh",
          padding: "40px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          My Booking
        </h2>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              maxWidth: "900px",
              margin: "0 auto 20px auto",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "10px",
                marginBottom: "10px"
              }}
            >
              <div>
                <strong>Date:</strong><br />
                {booking.date}
              </div>

              <div>
                <strong>Trip:</strong><br />
                {booking.pickup} → {booking.drop}
              </div>

              <div>
                <strong>Pickup:</strong><br />
                {booking.pickupTime}
              </div>

              <div>
                <strong>Drop:</strong><br />
                {booking.dropTime}
              </div>

              <div>
                <strong>Driver:</strong><br />
                {booking.driverName}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "10px",
                alignItems: "center"
              }}
            >
              <div>
                <strong>Car:</strong><br />
                {booking.carModel}
              </div>

              <div>
                <strong>Car No:</strong><br />
                {booking.carNumber}
              </div>

              <div>
                <strong>Amount:</strong><br />
                ₹{booking.amount}
              </div>

              <div>
                <strong>Status:</strong><br />
                <span
                  style={{
                    color:
                      booking.status === "On the Way"
                        ? "orange"
                        : "green",
                    fontWeight: "bold"
                  }}
                >
                  {booking.status}
                </span>
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  onClick={() =>
                    handleDelete(booking._id)
                  }
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  🗑
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminBookings;