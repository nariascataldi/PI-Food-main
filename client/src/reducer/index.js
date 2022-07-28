import { GET_RECIPES, GET_DIETS, FILTER_BY_DIETS, ORDER_BY_NAME, SEARCH_BY_NAME, ORDER_BY_SCORE, RECIPE_DETAIL, POST_RECIPE } from "../actions/index";
const initialState = {
  recipes: [],
  allRecipes: []
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload
      }
    case 'FILTER_BY_TYPES':
      const allRecipes = state.recipes;
      const typesFiltered = action.payload === 'All' ? allRecipes : allRecipes.filter(el => el.diets.includes(action.payload) ||
        el.diets.map((el) => el.title).includes(action.payload))
      return {
        ...state,
        recipes: typesFiltered
      }
    case 'ORDER_BY_NAME':
      const sortArr = action.payload === 'asc' ?
        state.allRecipes.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (b.title > a.title) {
            return -1;
          }
          return 0;
        }) :
        state.allRecipes.sort(function (a, b) {  //de forma descendente
          if (a.title > b.title) {
            return -1;
          }
          if (b.title > a.title) {
            return 1
          }
          return 0;
        })
      return {
        ...state,
        recipes: sortArr
      }
    default:
      return state;
  }
}
export default rootReducer;