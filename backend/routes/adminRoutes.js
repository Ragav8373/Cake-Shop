const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/adminController");
const { adminAuth } = require("../middleware/adminAuth");

router.post("/login", adminLogin);

// 🔐 protected route
router.get("/dashboard", adminAuth, (req, res) => {
  res.json({ message: "Welcome Admin Dashboard" });
});

module.exports = router;
