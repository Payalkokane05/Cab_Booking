// import { useNavigate } from "react-router-dom";

// function CabCard({ car }) {
//   const navigate = useNavigate();

//   return (
//     <div className="cab-card">
//       <img
//         src={car.carImage || "/images/demo-car.jpg"}
//         alt="car"
//         className="cab-image"
//       />
//        <h3>{car.model}</h3>
//       {/* <img src={car.image} alt={car.model} /> */}

//       <div className="cab-details">
//         <p><strong>🚗 Model:</strong> {car.carName}</p>
//         <p><strong>Type:</strong> {car.carType}</p>
//         <p><strong>Car No:</strong> {car.carNumber}</p>
//         <p><strong>Driver:</strong> {car.driverName}</p>
//         <p><strong>Fare:</strong> ₹{car.price}/Km</p>

//         <button
//           className="book-btn"
//           onClick={() => navigate(`/book/${car._id}`)}
//         >
//           Book Cab
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CabCard;


import { useNavigate } from "react-router-dom";

function CabCard({ car }) {
  const navigate = useNavigate();

  return (
    <div className="cab-card">
      <img
        src={car.image || "/images/demo-car.jpg"}
        alt={car.model}
        className="cab-image"
      />

      <h3>{car.model}</h3>

      <div className="cab-details">
        <p><strong>🚗 Model:</strong> {car.model}</p>
        <p><strong>Type:</strong> {car.type}</p>
        <p><strong>Car No:</strong> {car.carNumber}</p>
        <p><strong>Driver:</strong> {car.driverName}</p>
        <p><strong>Fare:</strong> ₹{car.pricePerKm}/Km</p>

        <button
          className="book-btn"
          onClick={() => navigate(`/book/${car._id}`)}
        >
          Book Cab
        </button>
      </div>
    </div>
  );
}

export default CabCard;