import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

function AdminCabs() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/cars");
      setCars(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ background: "#e6d8b5", minHeight: "100vh", padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Car List</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "30px"
          }}
        >
          {cars.map((car) => (
            <div key={car._id} style={cardStyle}>
              <img
                src={car.image}
                alt="car"
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
              />
         {/* <img
  src={`http://localhost:8000${car.image}`}
  alt="car"
  style={{
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  }}
/> */}

              <div style={{ marginTop: "10px" }}>
                <p><strong>Driver:</strong> {car.driverName}</p>
                <p><strong>Model:</strong> {car.model}</p>
                <p><strong>Type:</strong> {car.type}</p>
                <p><strong>Number:</strong> {car.carNumber}</p>
                <p><strong>Price:</strong> ₹{car.pricePerKm}/Km</p>

                <div style={{ marginTop: "10px" }}>
                  {/* <button style={editBtn}>Edit</button> */}
                  <button
  onClick={() => navigate(`/admin/edit/${car._id}`)}
>
  Edit
</button>
                  <button
                    style={deleteBtn}
                    onClick={() => deleteCar(car._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const cardStyle = {
  width: "230px",
  background: "#f4e7c5",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
};

const editBtn = {
  background: "black",
  color: "white",
  padding: "5px 10px",
  border: "none",
  marginRight: "10px",
  borderRadius: "5px",
  cursor: "pointer"
};

const deleteBtn = {
  background: "red",
  color: "white",
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default AdminCabs;