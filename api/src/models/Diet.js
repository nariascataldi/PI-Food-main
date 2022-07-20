const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('diet', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
/*
[✔] Tipo de dieta con las siguientes propiedades:
  ID:                  id
  Nombre:              title
*/
