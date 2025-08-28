const express = require("express");
const router = express.Router();
const Product = require("../model/productModel");
const Order = require("../model/orderModel");
const User = require("../model/userModel");

// ✅ Get Admin Dashboard Stats
router.get("/", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalUsers = await User.countDocuments();
    const outOfStock = await Product.countDocuments({ stock: { $lte: 0 } });

    res.json({
      totalProducts,
      totalOrders,
      totalUsers,
      outOfStock,
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
