import axios from "axios";

export const GET_RECIPES = 'GET_RECIPES'                  //CARDS
export const FILTER_TYPES_FI = 'FILTER_TYPES_FI'
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const GET_RECIPES_TITLE = 'GET_RECIPES_TITLE'      //SEARCH
export const POST_RECIPE = 'POST_RECIPE'
export const GET_DIETS = 'GET_DIETS'
export const RECIPE_DETAIL = 'RECIPE_DETAIL'

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios('http://localhost:3001/recipes');
    return dispatch({
      type: GET_RECIPES,
      payload: json.data
    })
  }
}
export function getRecipesTitle(title) {
  return async function (dispatch) {
    
      var json = await axios.get('http://localhost:3001/recipes?title=' + title);
      return dispatch({
        type: GET_RECIPES_TITLE,
        payload: json.data
      })
    
  }
};
export function filterRecipesByTypeFi(payload) {
  return {
    type: FILTER_TYPES_FI,
    payload
  }
}
export function filterRecipesByType(payload) {
  return {
    type: FILTER_BY_TYPES,
    payload
  }
}
export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  }
}
export function getDiets() {
  return async function (dispatch) {
    try {
      var info = await axios.get('http://localhost:3001/types', {});
      return dispatch({
        type: GET_DIETS,
        payload: info.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}
export function postRecipe(payload) {
  return async function () {
    const response = await axios.post('http://localhost:3001/recipes', payload);
    console.log(response);
    return response;
  }
}
export function recipeDetail(id){
  return async function(dispatch){
      let json = await axios.get('http://localhost:3001/recipes/' + id)
      return dispatch({ 
        type: RECIPE_DETAIL, 
        payload: json.data
      })
  }
}