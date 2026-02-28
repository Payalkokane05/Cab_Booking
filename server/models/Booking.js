const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },

  pickupLocation: String,
  dropLocation: String,

  pickupDate: String,
  pickupTime: String,

  fare: Number,

  status: {
    type: String,
    enum: ["pending", "accepted", "started", "completed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);