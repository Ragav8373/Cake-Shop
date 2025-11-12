const express = require("express");
const router = express.Router();
const Contact = require("../model/contactModel");

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, Email, and Message are required" });
    }

    const newContact = new Contact({ name, email, subject, phone, message });
    await newContact.save();

    res.status(201).json({ message: "Message saved successfully ✅" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ error: "Server error, please try again later" });
  }
});

module.exports = router;
