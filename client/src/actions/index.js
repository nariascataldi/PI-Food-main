import axios from "axios";

export const GET_RECIPES = 'GET_RECIPES'
// export const GET_DIETS = 'GET_DIETS'
// export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
// export const ORDER_BY_NAME = 'ORDER_BY_NAME'
// export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
// export const POST_RECIPE = 'POST_RECIPE'
// export const ORDER_BY_SCORE = 'ORDER_BY_SCORE'
// export const RECIPE_DETAIL = 'RECIPE_DETAIL'

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios('http://localhost:3001/recipes');
    return dispatch({
      type: GET_RECIPES,
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
// export function filterRecipesByType(payload) {
//   return {
//       type: 'FILTER_BY_TYPES',
//       payload
//   }
// }
// export function orderByName(payload) {
//   return {
//       type: 'ORDER_BY_NAME',
//       payload,
//   }
// }