const db = require("../database/models");
const { uploadImage } = require("../services/cloudinary");

const mainControllers = {
  index: (req, res) => {
    db.Profession.findAll().then((profesiones) => {
      res.send({
        profesiones: profesiones
      });
    });
  },
  //ejemplo para subir imagen
  uploadImage: (req, res) => {
    uploadImage()
    res.send('imagen subida')
  },
};

module.exports = mainControllers;
