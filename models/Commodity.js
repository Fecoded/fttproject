const mongoose = require('mongoose');

const CommoditySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
  },
  img: {
    type: String,
  },
  product_name: {
    type: String,
  },
  farm_name: {
    type: String,
  },
  description: {
    type: String,
  },
  buying_price: {
    type: String,
  },
  selling_price: {
    type: String,
  },
  duration: {
    type: String,
  },
  starting_unit: {
    type: String,
  },
  unit_number: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('commoditie', CommoditySchema);
