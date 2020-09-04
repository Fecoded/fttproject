const Wallet = require('../models/Wallet');
const WalletFunded = require('../models/WalletFunded');
const upload = require('../services/SetPicture');
const cloudinary = require('cloudinary');
require('../services/cloudinary');

// @desc    GET WALLET
// @route   GET /api/payment/me
// @access  Private
exports.getWallet = async (req, res, next) => {
  try {
    const wallet = await Wallet.find({ user: req.user.id });

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
exports.postWallet = async (req, res, next) =>
  upload(req, res, (err) => {
    const file = req.file;
    if (err === 'ERROR: IMAGE ONLY') {
      res.status(400).json({ msg: 'ERROR: IMAGE ONLY' });
    } else if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      try {
        const { first_name, last_name, phone, email, amount } = req.body;

        const walletfields = {};
        walletfields.user = req.user.id;
        if (first_name) walletfields.first_name = first_name;
        if (last_name) walletfields.last_name = last_name;
        if (email) walletfields.email = email;
        if (amount) walletfields.amount = amount;
        if (phone) walletfields.phone = phone;

        let wallet = new Wallet(walletfields);
        cloudinary.v2.uploader.upload(file.path).then((result) => {
          wallet.img = result.secure_url;

          Wallet.create(wallet);
          res.status(200).json({ success: true, data: wallet });
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          error: 'Server Error',
        });
      }
    }
  });

// @desc    CREATE AND UPDATE WALLET FUND
// @route   PUT /api/payment/me
// @access  Private
exports.updateWallet = async (req, res, next) => {
  const { user, amount } = req.body;

  const walletfields = {};
  if (amount) walletfields.amount = amount;
  if (user) walletfields.user = user;

  try {
    let wallet = await WalletFunded.findOne({ user });

    if (wallet) {
      walletfields.amount = wallet.amount + +amount;
      wallet = await WalletFunded.findOneAndUpdate(
        { user: user },
        { $set: walletfields },
        { new: true }
      );

      return res.status(200).json({ success: true, data: wallet });
    }

    wallet = await WalletFunded.create(walletfields);
    return res.status(201).json({ success: true, data: wallet });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    UPDATE WALLET STATUS
// @route   PUT /api/payment/wallet/:id
// @access  Private
exports.updateWalletStatus = async (req, res, next) => {
  try {
    let walletStatus = await Wallet.findById(req.params.id);

    let status = 'Approved';

    const newExp = {
      status,
    };

    walletStatus = await Wallet.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: walletStatus });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    DELETE WALLET FUND
// @route   DELETE /api/payment/me
// @access  Private
exports.deleteWallet = async (req, res, next) => {
  const { user, amount } = req.body;

  const walletfields = {};
  if (amount) walletfields.amount = amount;
  if (user) walletfields.user = user;

  try {
    let wallet = await WalletFunded.findOne({ user });

    if (walletfields.amount === undefined) {
      walletfields.amount = 0;

      wallet = await WalletFunded.findOneAndUpdate(
        { user: user },
        { $set: walletfields },
        { new: true }
      );

      return res.status(200).json({ success: true, data: wallet });
    }

    wallet = await WalletFunded.findOneAndUpdate(
      { user: user },
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

// @desc    GET WALLET
// @route   GET /api/payment/wallet/me
// @access  Private
exports.getFundedWallet = async (req, res, next) => {
  try {
    const wallet = await WalletFunded.findOne({ user: req.user.id });

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

// @desc    GET WALLET
// @route   GET /api/payment/wallet
// @access  Private
exports.getFundedWallets = async (req, res, next) => {
  try {
    const wallet = await WalletFunded.find();

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
