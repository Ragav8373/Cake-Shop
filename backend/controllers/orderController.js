const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

// Create Order - POST /api/v1/order
exports.createOrder = async (req, res, next) => {
  try {
    const cartItems = req.body;

    // Validate cart items
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    // Calculate total amount
    let totalAmount = 0;

    for (const item of cartItems) {
      if (!item.product || typeof item.qty !== "number") {
        return res.status(400).json({
          success: false,
          message: "Invalid cart item format",
        });
      }

      totalAmount += item.product.price * item.qty;
    }

    const status = "pending";

    // Create the order
    const order = await orderModel.create({
      cartItems,
      amount: totalAmount.toFixed(2),
      status,
    });

    // Update product stock
    for (const item of cartItems) {
      const product = await productModel.findById(item.product._id);
      if (product) {
        product.stock = Math.max(0, product.stock - item.qty);
        await product.save();
      }
    }

    // Send response
    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    console.error("Order creation failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};
