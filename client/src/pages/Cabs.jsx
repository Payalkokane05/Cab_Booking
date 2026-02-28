
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllCars } from "../services/carService";
import CabCard from "../components/CabCard";
// import "../styles/cabs.css";

function Cabs() {
  const [cars, setCars] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");

//   useEffect(() => {
//     fetchCars();
//   }, []);

//   const fetchCars = async () => {
//     try {
//       const data = await getAllCars();
//       setCars(data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

useEffect(() => {
  const fetchCars = async () => {
    try {
      const data = await getAllCars();
      console.log("Cars from backend:", data);   // 👈 ADD THIS
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchCars();
}, []);


  const filteredCars = cars
    .filter(car =>
      car.model?.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter(car =>
      car.type?.toLowerCase().includes(searchType.toLowerCase())
    );

//   const sortLowToHigh = () => {
//     const sorted = [...filteredCars].sort(
//       (a, b) => a.price - b.price
//     );
//     setCars(sorted);
//   };
const sortLowToHigh = () => {
  const sorted = [...cars].sort(
    (a, b) => a.pricePerKm - b.pricePerKm
  );
  setCars(sorted);
};

  return (
    <>
      <Navbar />

      <div className="cabs-container">
        <h2 className="cabs-title">Available Cabs</h2>

        <div className="cabs-controls">
          <input
            placeholder="Search by car name"
            onChange={(e) => setSearchName(e.target.value)}
          />

          <input
            placeholder="Search by car type"
            onChange={(e) => setSearchType(e.target.value)}
          />

          <button onClick={sortLowToHigh}>
            Sort Price: Low to High
          </button>
        </div>

        {/* <div className="cabs-grid">
          {filteredCars.map(car => (
            <CabCard key={car._id} car={car} />
          ))}
        </div> */}
<div className="cabs-grid">
  {cars.length === 0 && <h3>No Cars Found</h3>}
  {cars.map((car) => (
    <CabCard key={car._id} car={car} />
  ))}
</div>

      </div>
    </>
  );
}

export default Cabs;

