const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, 
      primaryKey: true

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY,
      allowNull: true
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true
    }
    
  });
};
/*
[ ] Receta con las siguientes propiedades:
  ID: *                         id
  Nombre *                      title
  Resumen del plato *           summary
  Nivel de "comida saludable"   health score
  Paso a paso                   analyzedInstructions
*/
