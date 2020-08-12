const Profile = require('../models/Profile');

// @desc      GET ALL PROFILE
// @routes    GET /api/profile
// @access    Private
exports.getAllProfile = async (req, res, next) => {
  try {
    const profile = await Profile.find();

    res
      .status(200)
      .json({ success: true, count: profile.length, data: profile });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
  next();
};

// @desc    GET CURRENT PROFILE
// @route   GET /api/profile/me
// @access  Private
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    return res.status(200).json({ success: true, data: profile });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    GET PROFILE BY ID
// @route   GET /api/profile/:id
// @access  Private
exports.getProfileById = async (req, res, next) => {
  try {
    let profile = await Profile.findOne({ user: req.params.id });

    res.status(200).json({ success: true, data: profile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    CREATE AND UPDATE PROFILE
// @route   POST /api/profile
// @access  Private
exports.postProfile = async (req, res, next) => {
  const {
    date_of_birth,
    gender,
    bank,
    account_name,
    account_number,
    bvn,
    name,
    relationship,
    email,
    phone,
    nok_gender,
  } = req.body;

  // Build profile object
  const profilefields = {};
  profilefields.user = req.user.id;
  if (date_of_birth) profilefields.date_of_birth = date_of_birth;
  if (gender) profilefields.gender = gender;
  if (bank) profilefields.bank = bank;
  if (account_name) profilefields.account_name = account_name;
  if (account_number) profilefields.account_number = account_number;
  if (bvn) profilefields.bvn = bvn;

  // Build next of kin object
  profilefields.next_of_kin = {};
  if (name) profilefields.next_of_kin.name = name;
  if (relationship) profilefields.next_of_kin.relationship = relationship;
  if (email) profilefields.next_of_kin.email = email;
  if (phone) profilefields.next_of_kin.phone = phone;
  if (nok_gender) profilefields.next_of_kin.nok_gender = nok_gender;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // UPDATE
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profilefields },
        { new: true }
      );

      return res.status(200).json({ success: true, data: profile });
    }

    // CREATE
    profile = await Profile.create(profilefields);
    res.status(201).json({ success: true, data: profile });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: msgs,
      });
    }
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
