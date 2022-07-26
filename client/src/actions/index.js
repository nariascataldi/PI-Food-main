import axios from "axios";

const BACKEND_PORT = 3001;
const URL_BACKEND = `http://localhost:${BACKEND_PORT}/recipes`;

export function getRecipes() {
  return async function(dispatch) {
    var json = await axios.get(URL_BACKEND);
    return dispatch({
      type: 'GET_CHARACTERS',
      payload: json.data
    })
 }
}