const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  amount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('wallet', WalletSchema);
