const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc      REGISTER ADMIN AND GENERATE TOKEN
// @route     POST api/admin
// @access    Private
exports.postAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await Admin.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'Admin already exists' });
    }

    user = new Admin({ name, email, password });
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    user = await Admin.create(user);

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        return res.status(201).json({
          success: true,
          data: token,
        });
      }
    );
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msgs,
      });
    } else {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
  next();
};
