const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./model/admin");

// 🔗 MongoDB connection (same as server.js)
const DB_URL =
  "mongodb+srv://ragav9760:gKo7TXGMJOmzrDUV@firstproject.ypeqcz6.mongodb.net/?retryWrites=true&w=majority&appName=FirstProject";

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("MongoDB Connected");

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const adminExists = await Admin.findOne({ email: "admin123@gmail.com" });
  if (adminExists) {
    console.log("Admin already exists");
    process.exit();
  }

  await Admin.create({
    email: "admin123@gmail.com",
    password: hashedPassword,
  });

  console.log("✅ Admin created successfully");
  process.exit();
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});
