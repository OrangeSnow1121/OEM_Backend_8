
const express = require("express");
const router = express.Router();

const users = [
  { username: "admin", password: "Lyb9172800915!@#", role: "admin" },
  { username: "Google-OEM", password: "G!oem2025", role: "user" },
  { username: "Samsung-OEM", password: "S!oem2025", role: "user" },
  { username: "Apple-OEM", password: "A!oem2025", role: "user" },
  { username: "LSI-Vendor", password: "L!ven2025", role: "user" },
  { username: "MTK-Vendor", password: "M!ven2025", role: "user" },
  { username: "Qcom-Vendor", password: "Q!ven2025", role: "user" },
  { username: "TechM-AQT", password: "T!aqt2025", role: "user" }
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const token = `token-${user.username}`;
  res.json({ token, role: user.role });
});

module.exports = router;
