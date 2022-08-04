require('dotenv').config();
const API_KEY = process.env.API_KEY;
const BACKEND_PORT = 3001;
var n = 3;  //100 recetas. 9 recetas por página
// Endpoints/Flags que pueden utilizar

const API_RECIPES = 'https://api.spoonacular.com/recipes/complexSearch' + '?apiKey=' + API_KEY; //https://api.spoonacular.com/recipes/complexSearch?apiKey=07a9cf8e55824b2ebcc60aaa3b93d787
const API_RECIPES_INFO = 'https://api.spoonacular.com/recipes/complexSearch' + '?apiKey=' + API_KEY + `&number=${n}&addRecipeInformation=true`; //https://api.spoonacular.com/recipes/complexSearch?apiKey=07a9cf8e55824b2ebcc60aaa3b93d787&addRecipeInformation=true
const API_INFORMATION = 'https://api.spoonacular.com/recipes/{id}/information' + '?apikey=' + API_KEY; //

if (n<100){
  console.log('Recuerda traer 100 recetas. :)');
}

module.exports = {
  API_KEY,
  API_RECIPES,
  API_RECIPES_INFO,
  API_INFORMATION,
  BACKEND_PORT
};

/*
### Únicos Endpoints/Flags que pueden utilizar

- GET <https://api.spoonacular.com/recipes/complexSearch>
  - Para obtener mayor información sobre las recetas, como por ejemplo el tipo de dieta deben agregar el flag `&addRecipeInformation=true` a este endpoint
  - Para los tipos de dieta deben tener en cuenta las propiedades vegetarian, vegan, glutenFree por un lado y también analizar las que se incluyan dentro de la propiedad `diets`
- GET <https://api.spoonacular.com/recipes/{id}/information>
 */