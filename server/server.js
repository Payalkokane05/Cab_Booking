
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const adminRoutes = require("./routes/adminRoutes");
// const userRoutes = require("./routes/userRoutes");
// const carRoutes = require("./routes/carRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// connectDB();

// const app = express();

// // ✅ Allow frontend
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));

// app.use(express.json());

// // Routes
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/cars", require("./routes/carRoutes"));
// app.use("/api/bookings", require("./routes/bookingRoutes"));
// app.use("/api/admin", adminRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/cars", carRoutes);
// app.use("/api/bookings", bookingRoutes);
// // app.use("/uploads", express.static("uploads"));

// app.listen(8000, () => {
//   console.log("Server running on 8000");
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

connectDB();

const app = express();

// Allow frontend
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// Routes (REGISTER ONLY ONCE)
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

app.listen(8000, () => {
  console.log("Server running on 8000");
});