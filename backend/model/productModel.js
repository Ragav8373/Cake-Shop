const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  minQuantity: { type: Number },
  featuresPrice: {
    eggless: { type: Number, default: 0 },
    shape: { type: Number, default: 0 },
    fondant: { type: Number, default: 0 },
  },
  image: { type: String },
  butterCream: [{ name: String, price: Number }],
  freshCream: [{ name: String, price: Number }],
  exotic: [{ name: String, price: Number }],
});

module.exports = mongoose.model('Product', productSchema);
