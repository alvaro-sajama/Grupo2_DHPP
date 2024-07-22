module.exports = (sequelize, dataTypes) => {
    let alias = "aspirantes";

    let config = {
      tableName: 'aspirantes',
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
      dni: {
        type: dataTypes.STRING,
        notNull: true,
        unique: true
      },
      nombre: {
        type: dataTypes.STRING,
        notNull: true
      },
      apellido: {
        type: dataTypes.STRING,
        notNull: true
      },
      email: {
        type: dataTypes.STRING,
        notNull: true,
        unique: true
      },
      telefono: {
        type: dataTypes.STRING
      },
      linkedin_url: {
        type: dataTypes.STRING,
        notNull: true
      },
      fecha_nacimiento: {
        type: dataTypes.DATE()
      },
      sexo: {
        type: dataTypes.ENUM("M", "F", "Otro")
      },
      imagen: {
        type: dataTypes.STRING,
        defaultValue: 'userDefault.png'
      },
      profesion_id: {
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
  
    const Aspirantes = sequelize.define(alias, cols, config);
    return Aspirantes;
};