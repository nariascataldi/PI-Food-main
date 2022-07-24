const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { API_RECIPES_INFO } = require('../utils/config');

const getApiInfo = async () => {
  const apiUrl = await axios.get(API_RECIPES_INFO); //API_RECIPES_INFO

  const apiInfo = await apiUrl.data.results.map(elApi => {
    return {
      id: elApi.id,
      title: elApi.title,
      summary: elApi.summary,
      creditsText: elApi.creditsText,
      diets: elApi.diets.length ? elApi.diets : [],
      image: elApi.image,
      healthScore: elApi.healthScore,
      analyzedInstructions: elApi.analyzedInstructions.length ? elApi.analyzedInstructions[0].steps.map(s => s.step) : []
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

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllRecipes,
  // getAllDiets
};
