import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function AdminAddCab() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    driverName: "",
    model: "",
    type: "",
    carNumber: "",
    pricePerKm: "",
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:8000/api/cars", {
      driverName: form.driverName,
      model: form.model,
      type: form.type,
      carNumber: form.carNumber,
      pricePerKm: form.pricePerKm,
      image: "/images/demo-car.jpg", // temporary static image
      available: true
    });

    alert("Car Added Successfully!");

    navigate("/admin/cabs"); // go to cab view page
  } catch (error) {
    console.log(error);
  }
};




  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add Car
          </h2>

          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="driverName"
              placeholder="Driver Name"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="model"
              placeholder="Car Model"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="type"
              placeholder="Car Type"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="carNumber"
              placeholder="Car Number"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="number"
              name="pricePerKm"
              placeholder="Price per Km"
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label style={{ fontWeight: "bold" }}>Car Image</label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={{ marginBottom: "15px" }}
            />

            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

/* ================= STYLES ================= */

const containerStyle = {
  background: "#e6d8b5",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const cardStyle = {
  background: "#f4e7c5",
  padding: "30px",
  borderRadius: "12px",
  width: "350px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
};

const formStyle = {
  display: "flex",
  flexDirection: "column"
};

const inputStyle = {
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  background: "#f4a300",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer"
};

export default AdminAddCab;