import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  mobile: { type: String, required: true },
  deliveryMethod: String,
  paymentMethod: String,
  address: String,
  pincode: String,
  deliveryDate: String,
  deliveryTime: String,
  pickupDate: String,
  pickupTime: String,
  items: [
    {
      productId: String,
      productName: String,
      image: String,
      flavour: String,
      quantity: Number,
      features: [String],
      message: String,
      totalPrice: Number,
    },
  ],
  totalQuantity: Number,
  totalPrice: Number,
  status: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
