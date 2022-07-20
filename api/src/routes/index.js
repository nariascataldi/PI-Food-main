const { Router } = require('express');
const axios = require('axios');
const { Recipe, Diet } = require('../db');
const {API_RECIPES_INFO} = require('../utils/config')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiUrl = await axios.get(API_RECIPES_INFO);
  const apiInfo = await apiUrl.data.map(el => {
    return {
      id: el.char_id,
      name: el.name,      //aquí se puede unificar datos, ya que al "name:" le podemos asignar como querramos
      birthday: el.birthday,
      occupation: el.occupation.map(el => el),
      img: el.img,
      status: el.status,
      nickname: el.nickname,
      appearance: el.appearance.map(el => el)
    }
  });
  return apiInfo;
}
const getDbInfo = async () => {
  return await Character.findAll({
    include: {
      model: Occupation,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })
};

const getAllCharacter = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
}

module.exports = router;
/*
 GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
 GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
 POST /recipes:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus tipos de dietas.
 GET /diets:
Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
*/