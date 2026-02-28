const Booking = require("../models/Booking");

exports.bookRide = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate("carId");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};