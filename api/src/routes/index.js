const { Router } = require('express');
const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { API_RECIPES_INFO } = require('../utils/config')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiUrl = await axios.get(API_RECIPES_INFO); //
  console.log(apiUrl);

  const apiInfo = await apiUrl.data.results.map(elApi => {
    return {
      id: elApi.id,
      title: elApi.title,
      summary: elApi.summary,
      diets: elApi.diets.map(el => el),
      image: elApi.image,
      healthScore: elApi.healthScore,
      analyzedInstructions: elApi.analyzedInstructions,
    }
  });
  return apiInfo;
}
const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ['title'],
      through: {
        attributes: []
      }
    }
  })
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
}
//-----------------------------------------------------
router.get('/recipes', async (req, res) => {
  const name = req.query.name;
  let recipesTotal = await getAllRecipes();
  if (name) {
    let recipeName = await recipesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
    recipeName.length ? res.status(200).send(recipeName) : res.status(404).send('No está la Receta ');
  } else {
    res.status(200).send(recipesTotal)
  }
});


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