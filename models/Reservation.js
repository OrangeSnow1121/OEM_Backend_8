const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  site: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  note: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
