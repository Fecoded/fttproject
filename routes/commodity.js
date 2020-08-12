const express = require('express');
const router = express.Router();
const {
  postCommodity,
  getCommodity,
  getAllCommodity,
  updateCommodity,
  updateUnit,
} = require('../controllers/commodity');
const auth = require('../middleware/auth');

router.route('/:id').put(auth, updateCommodity).get(getCommodity);
router.route('/unit/:id').put(auth, updateUnit);
router.route('/').post(auth, postCommodity).get(getAllCommodity);

module.exports = router;
