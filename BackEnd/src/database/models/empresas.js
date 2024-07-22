module.exports = (sequelize, dataTypes) => {
    let alias = "empresas";
    let config = {
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
        notNull: true
      },
      email: {
        type: dataTypes.STRING,
        notNull: true,
        unique: true
      },
      linkedin_url: {
        type: dataTypes.STRING,
        notNull: true
      },
      imagen: {
        type: dataTypes.STRING,
        defaultValue: 'userDefault.png'
      },
      profession_id: {
        type: dataTypes.INTEGER,
        references: {
          model: "Profession",
          key: "id"
        },
        notNull: true
      },
      contraseña: {
        type: dataTypes.STRING
      }
    };
  
    const Empresas = sequelize.define(alias, cols, config);
    return Empresas;
};