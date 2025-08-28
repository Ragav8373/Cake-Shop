const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, Email, and Message are required" });
  }

  console.log("📩 New contact message received:");
  console.log({ name, email, subject, phone, message });

  res.status(200).json({ message: "Message received successfully" });
});

module.exports = router;
