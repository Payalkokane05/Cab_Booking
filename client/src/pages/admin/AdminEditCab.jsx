import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

function AdminEditCab() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    driverName: "",
    model: "",
    type: "",
    carNumber: "",
    pricePerKm: "",
    image: null
  });

  // Fetch existing car data
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/cars/${id}`
        );
        setForm(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("driverName", form.driverName);
    formData.append("model", form.model);
    formData.append("type", form.type);
    formData.append("carNumber", form.carNumber);
    formData.append("pricePerKm", form.pricePerKm);

    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      await axios.put(
        `http://localhost:8000/api/cars/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert("Car Updated Successfully ✅");
      navigate("/admin/bookings");
      // navigate("/admin/bookings", { replace: true });
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
        <div
          style={{
            maxWidth: "450px",
            margin: "0 auto",
            background: "#f2e4c2",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px"
            }}
          >
            Edit Car Data
          </h2>

          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="driverName"
              value={form.driverName}
              onChange={handleChange}
              placeholder="Driver Name"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleChange}
              placeholder="Car Model"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="type"
              value={form.type}
              onChange={handleChange}
              placeholder="Car Type"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="carNumber"
              value={form.carNumber}
              onChange={handleChange}
              placeholder="Car Number"
              required
              style={inputStyle}
            />

            <input
              type="number"
              name="pricePerKm"
              value={form.pricePerKm}
              onChange={handleChange}
              placeholder="Price Per Km"
              required
              style={inputStyle}
            />

            <div style={{ marginTop: "10px" }}>
              <label>Car Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                style={{ marginTop: "5px" }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                background: "#f4a300",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

export default AdminEditCab;