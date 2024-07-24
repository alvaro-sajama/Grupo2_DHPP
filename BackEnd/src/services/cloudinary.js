const { v2:cloudinary } = require('cloudinary');

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  // Click 'View Credentials' below to copy your API secret
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;