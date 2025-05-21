// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: 'UGX' },
  category: { 
    type: String, 
    enum: ['ladies', 'kids', 'accessories'],
    required: true 
  },
  images: [{ type: String }],
  stock: { type: Number, default: 0 },
  sizes: [{ type: String }],
  colors: [{ type: String }],
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number, min: 1, max: 5 },
      review: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);