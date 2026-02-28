import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function UserHome() {
  const navigate = useNavigate();

  const userName = "User"; // Later we can get from token

  return (
    <>
      <Navbar />

      <div className="user-home-container">

        <div className="welcome-section">
          <h2>Welcome, {userName} 👋</h2>
          <p>Book rides quickly and manage your trips easily.</p>
        </div>

        <div className="dashboard-grid">

          <div
            className="dashboard-card"
            onClick={() => navigate("/cabs")}
          >
            <h3>🚗 Book a Ride</h3>
            <p>Choose from available cabs and book instantly.</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/bookings")}
          >
            <h3>📜 My Bookings</h3>
            <p>View your past and upcoming rides.</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default UserHome;