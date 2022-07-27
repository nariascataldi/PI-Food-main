import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios('http://localhost:3001/recipes');
    return dispatch({
      type: 'GET_RECIPES',
      payload: json.data
    })
  }
}
// export function getRecipesTitle(title) {
//   return async function (dispatch) {
//       var json = await axios.get('/recipe?title=' + title);
//       return dispatch({
//           type: 'GET_RECIPES_Title',
//           payload: json.data
//       })
//   }
// };
export function filterRecipesByType(payload) {
  return {
      type: 'FILTER_BY_TYPES',
      payload
  }
}