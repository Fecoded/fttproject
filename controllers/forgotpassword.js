const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mailgun = require('mailgun-js');

const User = require('../models/User');

//@route        POST api/forgotpassword
//@desc         Send Password link to users
//@access       Public
exports.postForgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Email Address not Found!' });
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    // TODO: this is to update token
    /*  
          await User.findByIdAndUpdate(
          { _id: user._id },
          { resetpasswordtoken: token },
          { new: true }
        );
      */

    const mg = mailgun({
      apiKey: process.env.API_KEY,
      domain: process.env.DOMAIN_KEY,
    });

    const data = {
      from: 'noreply@afwin.com',
      to: email,
      subject: 'Password Reset Link',
      text:
        'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        `https://fft.herokuapp.com/resetpassword/${token}` +
        '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n',
    };
    mg.messages().send(data, (err, body) => {
      if (err) {
        return res.json({ success: false, error: err.message });
      }
      return res.json({
        success: true,
        msg: 'Email has been Sent, Please check your email',
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@route        PUT api/forgotpassword/:token
//@desc         Reset Password
//@access       Private
exports.updateForgotPassword = async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        msg: 'Expired link, Please send another link',
      });
    }
    const payload = decoded;
    const { user } = payload;

    User.findOne({ _id: user.id });

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return;
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return;
        User.findOneAndUpdate({ _id: user.id }, { password: hash })
          .then(() =>
            res.json({ success: true, msg: 'Password changed Successfully' })
          )
          .catch((err) => res.status(500).json('Server Error'));
      });
    });
  });
};
