const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  driverName: String,
  carName: String,
  carType: String,
  carNumber: String,
  pricePerKm: Number,
  carImage: String,
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Car", CarSchema);