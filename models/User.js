const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please first name is required'],
  },
  last_name: {
    type: String,
    required: [true, 'Please last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Please email is required'],
    unique: true,
    validate: {
      validator: function (value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: 'Please enter a valid email',
    },
  },
  phone: {
    type: String,
    required: [true, 'Please phone number is required'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password with 6 or more characters'],
    minlength: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
