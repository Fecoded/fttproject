const mongoose = require('mongoose');

const StallSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  productName: {
    type: String,
  },
  buyingCost: {
    type: String,
  },
  sellingCost: {
    type: String,
  },
  unit_number: {
    type: Number,
  },
  costBuying: {
    type: String,
  },
  costReturn: {
    type: String,
  },
  totalCount: {
    type: String,
  },
  status: {
    type: String,
    default: 'Waiting',
  },
  deliveredAt: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('stalls', StallSchema);
