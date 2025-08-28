const express = require('express');
const router = express.Router();
const Order = require('../model/orderModel');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Order save failed:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

module.exports = router;
