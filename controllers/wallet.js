const Wallet = require('../models/Wallet');

// @desc    GET WALLET
// @route   GET /api/payment/me
// @access  Private
exports.getWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });

    if (!wallet) {
      return res.status(400).json({ msg: 'There is no wallet for this user' });
    }

    return res
      .status(200)
      .json({ success: true, count: wallet.length, data: wallet });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    GET WALLETS
// @route   GET /api/payment
// @access  Private
exports.getWallets = async (req, res, next) => {
  try {
    const wallet = await Wallet.find();

    return res
      .status(200)
      .json({ success: true, count: wallet.length, data: wallet });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    CREATE WALLET
// @route   POST /api/payment
// @access  Private
exports.postWallet = async (req, res, next) => {
  const name = req.body.metadata.name;
  const phone = req.body.metadata.phone;

  const { email, price } = req.body;

  const walletfields = {};
  walletfields.user = req.user.id;
  if (name) walletfields.name = name;
  if (email) walletfields.email = email;
  if (price) walletfields.amount = price;
  if (phone) walletfields.phone = phone;

  try {
    let wallet = await Wallet.findOne({ user: req.user.id });

    if (wallet) {
      walletfields.amount = wallet.amount + price;
      wallet = await Wallet.findOneAndUpdate(
        { user: req.user.id },
        { $set: walletfields },
        { new: true }
      );

      return res.status(200).json({ success: true, data: wallet });
    }

    wallet = await Wallet.create(walletfields);
    res.status(200).json({ success: true, data: wallet });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    UPDATE WALLET
// @route   PUT /api/payment/me
// @access  Private
exports.updateWallet = async (req, res, next) => {
  const { amount } = req.body;

  const walletfields = {};
  walletfields.user = req.user.id;
  if (amount) walletfields.amount = amount;

  try {
    let wallet = await Wallet.findOne({ user: req.user.id });

    if (walletfields.amount === undefined) {
      walletfields.amount = 0;

      wallet = await Wallet.findOneAndUpdate(
        { user: req.user.id },
        { $set: walletfields },
        { new: true }
      );

      return res.status(200).json({ success: true, data: wallet });
    }

    wallet = await Wallet.findOneAndUpdate(
      { user: req.user.id },
      { $set: walletfields },
      { new: true }
    );

    return res.status(200).json({ success: true, data: wallet });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
