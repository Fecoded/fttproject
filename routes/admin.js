const express = require('express');
const router = express.Router();
const { postAdmin } = require('../controllers/admin');

router.route('/').post(postAdmin);

module.exports = router;
