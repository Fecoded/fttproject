const express = require('express');
const router = express.Router();
const {
  postWallet,
  getWallet,
  getWallets,
  updateWallet,
} = require('../controllers/wallet');
const auth = require('../middleware/auth');

router.route('/').post(auth, postWallet).get(auth, getWallets);
router.route('/me').get(auth, getWallet).put(auth, updateWallet);

module.exports = router;
