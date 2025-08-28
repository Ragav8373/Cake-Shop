const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://ragav9760:gKo7TXGMJOmzrDUV@firstproject.ypeqcz6.mongodb.net/?retryWrites=true&w=majority&appName=FirstProject';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB Connected'))
.catch((err) => console.error(' MongoDB Connection Error:', err));

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require("./routes/adminRoutes");
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/admin", adminRoutes);
app.get('/', (req, res) => {
  res.send(' Backend API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
