const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  date_of_birth: {
    type: String,
  },
  gender: {
    type: String,
  },
  bank: {
    type: String,
  },
  account_name: {
    type: String,
  },
  account_number: {
    type: String,
  },
  bvn: {
    type: String,
  },
  next_of_kin: {
    name: {
      type: String,
    },
    relationship: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    nok_gender: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
