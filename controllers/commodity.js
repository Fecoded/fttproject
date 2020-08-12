const Commodity = require('../models/Commodity');
const upload = require('../services/SetPicture');
const cloudinary = require('cloudinary');
require('../services/cloudinary');

// @desc      GET ALL COMMODITIES
// @routes    GET /api/commodity
// @access    Private
exports.getAllCommodity = async (req, res, next) => {
  try {
    const { page = 1, limit = 6 } = req.query;
   
    const commodity = await Commodity.find()
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

      const count = await Commodity.countDocuments();

      res.status(200).json({
        success: true,
        count,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
        data: commodity,
      });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc      GET ALL COMMODITIES
// @routes    GET /api/commodity
// @access    Private
exports.getCommodity = async (req, res, next) => {
  try {
    const commodity = await Commodity.findById(req.params.id);

    res
      .status(200)
      .json({ success: true, count: commodity.length, data: commodity });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
  next();
};

// @desc      CREATE NEW COMMODITY
// @routes    POST /api/commodity
// @access    Private
exports.postCommodity = (req, res, next) =>
  upload(req, res, (err) => {
    const file = req.file;
    if (err === 'ERROR: IMAGE ONLY') {
      res.status(400).json({ msg: 'ERROR: IMAGE ONLY' });
    } else if (err) {
      res.status(400).json({ msg: err.message });
    } else {
      try {
        const {
          product_name,
          farm_name,
          description,
          buying_price,
          selling_price,
          duration,
          starting_unit,
          unit_number,
        } = req.body;

        const commodityFields = {};
        commodityFields.user = req.user.id;
        if (product_name) commodityFields.product_name = product_name;
        if (farm_name) commodityFields.farm_name = farm_name;
        if (description) commodityFields.description = description;
        if (buying_price) commodityFields.buying_price = buying_price;
        if (selling_price) commodityFields.selling_price = selling_price;
        if (duration) commodityFields.duration = duration;
        if (starting_unit) commodityFields.starting_unit = starting_unit;
        if (unit_number) commodityFields.unit_number = unit_number;

        let commodity = new Commodity(commodityFields);
        cloudinary.v2.uploader.upload(file.path).then((result) => {
          // if (error) throw console.log(error);
          commodity.img = result.secure_url;
          // Create
          Commodity.create(commodity);
          res.status(200).json({ success: true, data: commodity });
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

// @desc    UPDATE COMMODITY
// @routes  UPDATE api/commodity/:id
// @access  Private
exports.updateCommodity = async (req, res, next) => {
  const {
    product_name,
    farm_name,
    description,
    buying_price,
    selling_price,
    duration,
    unit_number,
  } = req.body;

  const newExp = {
    product_name,
    farm_name,
    description,
    buying_price,
    selling_price,
    duration,
    unit_number,
  };
  try {
    let commodity = await Commodity.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: commodity });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    UPDATE COMMODITY UNIT
// @routes  UPDATE api/commodity/unit/:id
// @access  Private
exports.updateUnit = async (req, res, next) => {
  const { unit_number } = req.body;

  const newExp = {
    unit_number,
  };
  try {
    let unit = await Commodity.findByIdAndUpdate(
      req.params.id,
      { $set: newExp },
      { new: true }
    );

    return res.status(200).json({ success: true, data: unit });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
