const db = require("../database/models");
const { uploadImage } = require("../services/cloudinary");

const mainControllers = {
  index: (req, res) => {
    res.send({
      aspirantes: '/aspirantes',
      profesiones: '/profesiones'
    });
    ;
  }
};

module.exports = mainControllers;
