import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password
      });

      alert("Registration Successful ✅");
      navigate("/login");

    } catch (error) {
      alert("Registration Failed ❌");
    }
  };

  return (
    <div>

      {/* TOP BAR */}
      <div className="topbar">
        <div>Cab Booking App</div>
        <div onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          Login ▾
        </div>
      </div>

      {/* FORM */}
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <input
              className="auth-input"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />

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

            <input
              className="auth-input"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />

            <button className="auth-black-btn">
              Signup
            </button>
          </form>

          <div className="auth-text">
            Already have an account?
          </div>

          <button
            className="auth-yellow-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Register;