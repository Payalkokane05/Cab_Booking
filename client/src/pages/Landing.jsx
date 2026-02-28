import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>

      {/* TOP BAR */}
      <div className="topbar">
        <div>Cab Booking App</div>
        <div
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Login ▾
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="hero-title">
          Your Ride, Your Way
        </div>

        <div className="hero-subtitle">
          Reliable. Fast. Affordable. Book cabs anytime, anywhere.
        </div>

        <button
          className="explore-btn"
          onClick={() => navigate("/cabs")}
        >
          Explore Services
        </button>

        {/* <div className="image-placeholder">
          Demo Image Placeholder
        </div> */}
        <img
  src="/images/taxi.jpg"
  alt="Taxi"
  style={{
    width: "350px",
    marginTop: "20px"
  }}
/>
      </div>

    </div>
  );
}

export default Landing;