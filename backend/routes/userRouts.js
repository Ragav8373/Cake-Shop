import express from "express";
import User from "../model/userModel.js";

const router = express.Router();

/* GET all users for admin */
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
