


import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";
import userRoutes from "./routes/userRouts.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* Fix __dirname in ES module */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_URL =
  "mongodb+srv://ragav9760:gKo7TXGMJOmzrDUV@firstproject.ypeqcz6.mongodb.net/?retryWrites=true&w=majority&appName=FirstProject";

/* MongoDB connection */
mongoose
  .connect(DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static uploads */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* Routes */
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

/* Test route */
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

/* Server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


