const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
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
