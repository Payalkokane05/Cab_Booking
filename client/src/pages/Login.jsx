import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      localStorage.setItem("role","user"); // "token" ,data.token
      alert("Login Successful ✅");
      navigate("/home");
    } catch (error) {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div>

      {/* TOP BAR */}
      <div className="topbar">
        <div>Cab Booking App</div>
        <div onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
          Signup ▾
        </div>
      </div>

      {/* FORM */}
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              className="auth-input"
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              required
            />

            <input
              className="auth-input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button className="auth-black-btn">
              Login
            </button>
          </form>

          <div className="auth-text">
            New user?
          </div>

          <button
            className="auth-yellow-btn"
            onClick={() => navigate("/register")}
          >
            Signup
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;