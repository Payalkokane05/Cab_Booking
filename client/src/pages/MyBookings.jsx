import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

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
          My Bookings
        </h2>

        {bookings.length === 0 && (
          <h3 style={{ textAlign: "center" }}>No Bookings Yet</h3>
        )}

        {bookings.map((booking) => (
          <div
            key={booking.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <p><strong>Trip:</strong> {booking.pickup} → {booking.drop}</p>
            <p><strong>Pickup:</strong> {booking.pickupDate} {booking.pickupTime}</p>
            <p><strong>Drop:</strong> {booking.dropDate} {booking.dropTime}</p>
            <p><strong>Status:</strong> 
              <span style={{ color: "orange", marginLeft: "5px" }}>
                {booking.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyBookings;