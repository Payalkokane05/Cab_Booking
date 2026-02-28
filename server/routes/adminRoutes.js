const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const User = require("../models/User");
const Car = require("../models/Car");
const Booking = require("../models/Booking");

router.get("/stats", async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const cabsCount = await Car.countDocuments();
    const bookingsCount = await Booking.countDocuments();

    res.json({
      users: usersCount,
      cabs: cabsCount,
      bookings: bookingsCount
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Admin Register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "Admin Registered Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Admin Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({
      message: "Login Successful",
      token: "adminToken"
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;