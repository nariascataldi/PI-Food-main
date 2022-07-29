const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creditsText:{
      type: DataTypes.STRING,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
      },
      allowNull: true
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "https://www.euskadi.eus/contenidos/informacion/alim_sal_plato/es_def/images/plato-saludable01.PNG"
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  });
};
/*
[✔] Receta con las siguientes propiedades:
  ID: *                         id
  Nombre *                      title
  Resumen del plato *           summary
  Nivel de "comida saludable"   health score
  Paso a paso                   analyzedInstructions
*/
