import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function AdminRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/admin/register", form);
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button style={blackBtn}>Log In</button>
        </form>

        <button
          style={yellowBtn}
          onClick={() => navigate("/admin/register")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

const wrapperStyle = {
  minHeight: "100vh",
  background: "#e6d8b5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  width: "300px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px"
};

const blackBtn = {
  width: "100%",
  padding: "10px",
  background: "black",
  color: "white",
  border: "none",
  marginBottom: "10px"
};

const yellowBtn = {
  width: "100%",
  padding: "10px",
  background: "#f4a300",
  border: "none"
};

export default AdminRegister;