const express = require('express');
const router = express.Router();
const {
  getUserAuth,
  postUserAuth,
  getAdminAuth,
  postAdminAuth,
  getUsers,
} = require('../controllers/auth');
const auth = require('../middleware/auth');

router.route('/user').get(auth, getUserAuth).post(postUserAuth);
router.route('/users').get(auth, getUsers);
router.route('/admin').get(auth, getAdminAuth).post(postAdminAuth);

module.exports = router;
