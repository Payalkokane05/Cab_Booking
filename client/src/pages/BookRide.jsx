
// import Navbar from "../components/Navbar";
// import { useState } from "react";

// function BookRide() {
//   const [form, setForm] = useState({
//     pickupLocation: "",
//     dropLocation: "",
//     pickupDate: "",
//     pickupTime: "",
//     dropDate: "",
//     dropTime: ""
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(form);
//   // };
//   import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // Save booking temporarily in localStorage
//   const existingBookings =
//     JSON.parse(localStorage.getItem("bookings")) || [];

//   const newBooking = {
//     id: Date.now(),
//     pickup: form.pickupLocation,
//     drop: form.dropLocation,
//     pickupDate: form.pickupDate,
//     pickupTime: form.pickupTime,
//     dropDate: form.dropDate,
//     dropTime: form.dropTime,
//     status: "On the Way"
//   };

//   localStorage.setItem(
//     "bookings",
//     JSON.stringify([...existingBookings, newBooking])
//   );

//   // Redirect to MyBookings page
//   navigate("/mybookings");
// };

//   return (
//     <>
//       <Navbar />

//       <div
//         style={{
//           background: "#e6d8b5",
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         <div
//           style={{
//             background: "#f4cc62",
//             padding: "30px",
//             borderRadius: "15px",
//             width: "400px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
//           }}
//         >
//           <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//             Book a Ride
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <label>Pickup Location</label>
//             <input
//               name="pickupLocation"
//               placeholder="Enter pickup location"
//               onChange={handleChange}
//               style={inputStyle}
//             />

//             <label>Drop Location</label>
//             <input
//               name="dropLocation"
//               placeholder="Enter drop location"
//               onChange={handleChange}
//               style={inputStyle}
//             />

//             <label>Pickup Date</label>
//             <input
//               type="date"
//               name="pickupDate"
//               onChange={handleChange}
//               style={inputStyle}
//             />

//             <label>Pickup Time</label>
//             <input
//               type="time"
//               name="pickupTime"
//               onChange={handleChange}
//               style={inputStyle}
//             />

//             <label>Drop Date</label>
//             <input
//               type="date"
//               name="dropDate"
//               onChange={handleChange}
//               style={inputStyle}
//             />

//             <label>Drop Time</label>
//             <input
//               type="time"
//               name="dropTime"
//               onChange={handleChange}
//               style={inputStyle}
//             />

//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 marginTop: "20px",
//                 padding: "10px",
//                 background: "#ffb000",
//                 border: "none",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 cursor: "pointer"
//               }}
//             >
//               Book Ride
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "8px",
//   marginTop: "5px",
//   marginBottom: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc"
// };

// export default BookRide;





import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookRide() {
  const navigate = useNavigate(); // ✅ inside component (correct)

  const [form, setForm] = useState({
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      id: Date.now(),
      pickup: form.pickupLocation,
      drop: form.dropLocation,
      pickupDate: form.pickupDate,
      pickupTime: form.pickupTime,
      dropDate: form.dropDate,
      dropTime: form.dropTime,
      status: "On the Way"
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, newBooking])
    );

    navigate("/mybookings"); // ✅ redirect
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#e6d8b5",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            background: "#f4cc62",
            padding: "30px",
            borderRadius: "15px",
            width: "400px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Book a Ride
          </h2>

          <form onSubmit={handleSubmit}>
            <label>Pickup Location</label>
            <input
              name="pickupLocation"
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Drop Location</label>
            <input
              name="dropLocation"
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Pickup Time</label>
            <input
              type="time"
              name="pickupTime"
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Drop Date</label>
            <input
              type="date"
              name="dropDate"
              onChange={handleChange}
              style={inputStyle}
            />

            <label>Drop Time</label>
            <input
              type="time"
              name="dropTime"
              onChange={handleChange}
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "10px",
                background: "#ffb000",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Book Ride
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

export default BookRide;