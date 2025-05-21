// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/users');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/divine_shoppers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Mobile Money Payment Endpoint
app.post('/api/payments/mobile-money', async (req, res) => {
  const { phone, amount, network } = req.body;
  
  // In a real app, integrate with MTN Mobile Money or Airtel Money API
  console.log(`Processing UGX ${amount} payment via ${network} for ${phone}`);
  
  // Simulate payment processing
  setTimeout(() => {
    res.json({
      success: true,
      message: `Payment of UGX ${amount} via ${network} processed successfully`,
      transactionId: `DS-${Date.now()}`
    });
  }, 2000);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));