const db = require("../database/models");

const mainControllers = {
  index: (req, res) => {
    db.Profession.findAll().then((profesiones) => {
      res.send({
        profesiones: profesiones
      });
    });
  },
};

module.exports = mainControllers;
