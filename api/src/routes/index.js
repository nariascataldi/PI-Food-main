const { Router } = require('express');
const axios = require('axios');

const model = require('../apiInfo/allData')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', async (req, res) => {
  const name = req.query.name;
  let recipesTotal = await model.getAllRecipes();
  if (name) {
    let recipeQuery = await recipesTotal.filter(r => r.name.toLowrCase().includes(name.toString().toLowerCase()));
    recipeQuery.length ? 
      res.status(200).send(recipeQuery) :
      res.status(404).send(`No está la Receta ${name}`);
  } else {
    res.status(200).send(recipesTotal)
  }
});


module.exports = router;
/*
[✔] GET /recipes?name="...":
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