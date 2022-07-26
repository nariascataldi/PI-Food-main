import axios from "axios";
import URL_BACKEND from '../utils/config'

export function getRecipes() {
  return async function(dispatch) {
    var json = await axios.get(URL_BACKEND);
    return dispatch({
      type: 'GET_CHARACTERS',
      payload: json.data
    })
 }
}