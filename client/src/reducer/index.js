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
    default:
      return state;
  }
}
export default rootReducer;