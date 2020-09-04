const express = require('express');
const router = express.Router();
const {
  postWallet,
  getWallet,
  getFundedWallet,
  getFundedWallets,
  getWallets,
  updateWallet,
  updateWalletStatus,
  deleteWallet,
} = require('../controllers/wallet');
const auth = require('../middleware/auth');

router.route('/').post(auth, postWallet).get(auth, getWallets);
router
  .route('/me')
  .get(auth, getWallet)
  .put(auth, updateWallet)
  .delete(auth, deleteWallet);
router.route('/wallet/me').get(auth, getFundedWallet);
router.route('/wallet').get(auth, getFundedWallets);
router.route('/wallet/:id').put(auth, updateWalletStatus);

module.exports = router;
