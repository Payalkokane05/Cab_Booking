

// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="navbar">
//       <div className="nav-logo" onClick={() => navigate("/select-login")}>  //home
//         UCab App
//       </div>

//       <div className="nav-links">
        
//         <span onClick={() => navigate("/cabs")}>Book Cab</span>
//         <span onClick={() => navigate("/bookings")}>My Booking</span>
//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/select-login");
  };

  return (
    <div style={navbarStyle}>
      <div style={{ fontWeight: "bold" }}>UCab App</div>

      <div style={{ display: "flex", gap: "20px" }}>
        {role === "admin" && (
          <>
            <span onClick={() => navigate("/admin/dashboard")}>Home</span>
            <span onClick={() => navigate("/admin/users")}>Users</span>
            <span onClick={() => navigate("/admin/cabs")}>Cabs</span>
            <span onClick={() => navigate("/admin/addcab")}>AddCab</span>
          </>
        )}

        {role === "user" && (
          <>
            <span onClick={() => navigate("/home")}>Home</span>
            <span onClick={() => navigate("/book-ride")}>Book Cab</span>
            <span onClick={() => navigate("/my-bookings")}>My Booking</span>
          </>
        )}

        <button onClick={handleLogout} style={logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}

const navbarStyle = {
  background: "#f4a300",
  padding: "15px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logoutBtn = {
  background: "black",
  color: "white",
  border: "none",
  padding: "6px 12px",
  cursor: "pointer"
};

export default Navbar;