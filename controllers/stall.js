const Stall = require('../models/Stall');

// @desc    GET USER STALL
// @route   GET /api/stall/me
// @access  Private
exports.getStall = async (req, res, next) => {
  try {
    let stall = await Stall.find({ user: req.user.id });

    res.status(200).json({ success: true, count: stall.length, data: stall });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    GET USER STALLS
// @route   GET /api/stall
// @access  Private
exports.getStalls = async (req, res, next) => {
  try {
    let stall = await Stall.find();

    res.status(200).json({ success: true, count: stall.length, data: stall });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    GET USER STALL
// @route   GET /api/stall/:id
// @access  Private
exports.getStallById = async (req, res, next) => {
  try {
    let stall = await Stall.find({ user: req.params.id });

    res.status(200).json({ success: true, count: stall.length, data: stall });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc   CREATE USER STALL
// @route  POST /api/stall
// @access Private
exports.postStall = async (req, res, next) => {
  try {
    let stall = await Stall.findOne({ user: req.user.id });

    stall = await Stall.create(req.body);

    res.status(201).json({ success: true, data: stall });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    UPDATE STALL STATUS
// @route   PUT /api/stall/:id
// @access  Private
exports.updateStallStatus = async (req, res, next) => {
  try {
    let stallStatus = await Stall.findById(req.params.id);

    let status = 'Approved';
    let deliveredAt = new Date().toLocaleDateString();

    const newExp = {
      status,
      deliveredAt,
    };

    stallStatus = await Stall.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: stallStatus });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
