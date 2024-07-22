module.exports = (sequelize, dataTypes) => {
  let alias = "Profession";
  let config = {
    tableName: 'Professions',
    timestamps: false,
    deletedAt: false,
  };
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
      notNull: true,
      unique: true,
    },
  };

  const Professions = sequelize.define(alias, cols, config);
  return Professions;
};
