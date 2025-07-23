const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require('./routes/auth'); 

const reservationRoutes = require('./routes/reservations');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.use("/api/reservations", reservationRoutes);

  // Example endpoint
app.get("/", (req, res) => {
  res.send("OEM Reservation API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});