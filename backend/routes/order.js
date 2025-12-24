import express from "express";
import Order from "../model/orderModel.js";

const router = express.Router(); // ✅ Router

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders); // Send all order details
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// POST create new order
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      deliveryMethod,
      paymentMethod,
      address,
      pincode,
      deliveryDate,
      deliveryTime,
      pickupDate,
      pickupTime,
      items,
      totalQuantity,
      totalPrice,
    } = req.body;

    const newOrder = new Order({
      name,
      email,
      mobile,
      deliveryMethod,
      paymentMethod,
      address,
      pincode,
      deliveryDate,
      deliveryTime,
      pickupDate,
      pickupTime,
      items,
      totalQuantity,
      totalPrice,
      status: "Pending",
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

export default router;
