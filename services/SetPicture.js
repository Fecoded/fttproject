const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, 'image-' + Date.now() + path.extname(file.originalname));
  },
});

const uploads = multer({
  storage: storage,
  limits: { fileSize: 600000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single('image');

// Check File Type
function checkFileType(file, cb) {
  // Allowed Ext
  const fileTypes = /jpeg|jpg|png|gif/;
  // check the ext
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('ERROR: IMAGE ONLY');
  }
}

module.exports = uploads;
