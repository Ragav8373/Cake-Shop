const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  weight: String,
  message: String,
  quantity: Number,
  unitPrice: Number,
});

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  deliveryMethod: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  product: productSchema,  // embedded product object
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
