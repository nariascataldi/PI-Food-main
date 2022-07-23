const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('diet', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
};
/*
[✔] Tipo de dieta con las siguientes propiedades:
  ID:                  id
  Nombre:              title
*/
/**
vegetarian	true
vegan	true
glutenFree	true
dairyFree	true
veryHealthy	true
cheap	false
veryPopular	true
sustainable	false
lowFodmap	false
 */