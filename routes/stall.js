const express = require('express');
const router = express.Router();
const {
  getStallById,
  getStalls,
  postStall,
  getStall,
  updateStallStatus,
} = require('../controllers/stall');
const auth = require('../middleware/auth');

router.route('/').post(auth, postStall).get(auth, getStalls);
router.route('/me').get(auth, getStall);
router.route('/:id').get(auth, getStallById).put(auth, updateStallStatus);

module.exports = router;
