const express = require('express');
const router = express.Router();
const {
  postForgotPassword,
  updateForgotPassword,
} = require('../controllers/forgotpassword');
const auth = require('../middleware/auth');

router.route('/').post(postForgotPassword);
router.route('/:token').put(updateForgotPassword);

module.exports = router;
