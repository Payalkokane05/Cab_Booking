// import Navbar from "../../components/Navbar";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function AdminDashboard() {
//   // Dummy Data (Later we connect to backend)
//   const usersCount = 1;
//   const cabsCount = 6;
//   const bookingsCount = 1;

//   const data = {
//     labels: ["Users", "Cabs", "Bookings"],
//     datasets: [
//       {
//         label: "Count",
//         data: [usersCount, cabsCount, bookingsCount],
//         backgroundColor: "#f4a300"
//       }
//     ]
//   };

//   return (
//     <>
//       <Navbar />

//       <div
//         style={{
//           background: "#e6d8b5",
//           minHeight: "100vh",
//           padding: "40px"
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//           Dashboard
//         </h2>

//         <div
//           style={{
//             background: "white",
//             padding: "30px",
//             borderRadius: "12px",
//             boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
//             maxWidth: "900px",
//             margin: "0 auto"
//           }}
//         >
//           {/* Stats Boxes */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               marginBottom: "40px"
//             }}
//           >
//             <StatBox title="USERS" value={usersCount} />
//             <StatBox title="CABS" value={cabsCount} />
//             <StatBox title="BOOKINGS" value={bookingsCount} />
//           </div>

//           {/* Bar Chart */}
//           <div style={{ width: "400px", margin: "0 auto" }}>
//             <Bar data={data} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function StatBox({ title, value }) {
//   return (
//     <div
//       style={{
//         background: "#f4a300",
//         padding: "20px 40px",
//         borderRadius: "8px",
//         textAlign: "center",
//         color: "black",
//         fontWeight: "bold",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
//       }}
//     >
//       <div>{title}</div>
//       <div style={{ marginTop: "10px", fontSize: "20px" }}>{value}</div>
//     </div>
//   );
// }

// export default AdminDashboard;


import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  // ✅ Dynamic state
  const [stats, setStats] = useState({
    users: 0,
    cabs: 0,
    bookings: 0
  });

  // ✅ Fetch from backend
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:8000/api/admin/stats"
//         );
//         setStats(res.data);
//       } catch (error) {
//         console.log("Error fetching stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);
useEffect(() => {
  const fetchStats = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/admin/stats"
      );

      console.log("Dashboard Data:", res.data); // 👈 ADD THIS

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchStats();
}, []);

  const data = {
    labels: ["Users", "Cabs", "Bookings"],
    datasets: [
      {
        label: "Count",
        data: [stats.users, stats.cabs, stats.bookings], // ✅ replaced
        backgroundColor: "#f4a300"
      }
    ]
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
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Dashboard
        </h2>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          {/* Stats Boxes */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "40px"
            }}
          >
            <StatBox title="USERS" value={stats.users} />
            <StatBox title="CABS" value={stats.cabs} />
            <StatBox title="BOOKINGS" value={stats.bookings} />
          </div>

          {/* Bar Chart */}
          <div style={{ width: "400px", margin: "0 auto" }}>
            <Bar data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

function StatBox({ title, value }) {
  return (
    <div
      style={{
        background: "#f4a300",
        padding: "20px 40px",
        borderRadius: "8px",
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    >
      <div>{title}</div>
      <div style={{ marginTop: "10px", fontSize: "20px" }}>{value}</div>
    </div>
  );
}

export default AdminDashboard;