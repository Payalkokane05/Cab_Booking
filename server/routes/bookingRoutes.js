// const router = require("express").Router();
// const auth = require("../middlewares/authMiddleware");
// const { bookRide, getUserBookings } = require("../controllers/bookingController");

// router.post("/book", auth, bookRide);
// router.get("/my", auth, getUserBookings);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { bookRide, getUserBookings } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, bookRide);
router.get("/my", authMiddleware, getUserBookings);

// Get all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// Delete booking
router.delete("/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Booking deleted" });
});

// // ✅ CREATE BOOKING
// router.post("/", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     const savedBooking = await booking.save();
//     res.status(201).json(savedBooking);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating booking" });
//   }
// });

// // ✅ GET ALL BOOKINGS  ⭐ ADD THIS
// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching bookings" });
//   }
// });

module.exports = router;
