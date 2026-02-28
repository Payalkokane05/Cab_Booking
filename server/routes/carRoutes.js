
const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// Add Car
router.post("/", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.json({ message: "Car Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding car" });
  }
});

// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const updatedData = {
//       driverName: req.body.driverName,
//       model: req.body.model,
//       type: req.body.type,
//       carNumber: req.body.carNumber,
//       pricePerKm: req.body.pricePerKm
//     };

//     if (req.file) {
//       updatedData.image = `/uploads/${req.file.filename}`;
//     }

//     await Car.findByIdAndUpdate(req.params.id, updatedData);

//     res.json({ message: "Car Updated" });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating car" });
//   }
// });










// Get All Cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars" });
  }
});

module.exports = router;