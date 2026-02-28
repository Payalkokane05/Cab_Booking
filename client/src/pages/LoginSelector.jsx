import { useNavigate } from "react-router-dom";

function LoginSelector() {
  const navigate = useNavigate();

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2>Select Login Type</h2>

        <button style={blackBtn} onClick={() => navigate("/login")}>
          User Login
        </button>

        <button style={yellowBtn} onClick={() => navigate("/admin/login")}>
          Admin Login
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
  textAlign: "center",
  width: "300px"
};

const blackBtn = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  background: "black",
  color: "white",
  border: "none",
  cursor: "pointer"
};

const yellowBtn = {
  width: "100%",
  padding: "10px",
  background: "#f4a300",
  color: "black",
  border: "none",
  cursor: "pointer"
};

export default LoginSelector;