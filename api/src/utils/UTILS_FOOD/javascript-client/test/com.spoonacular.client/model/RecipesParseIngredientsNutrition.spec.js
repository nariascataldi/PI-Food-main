/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.spoonacular.client/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.spoonacular.client/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpoonacularApi);
  }
}(this, function(expect, SpoonacularApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpoonacularApi.RecipesParseIngredientsNutrition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RecipesParseIngredientsNutrition', function() {
    it('should create an instance of RecipesParseIngredientsNutrition', function() {
      // uncomment below and update the code to test RecipesParseIngredientsNutrition
      //var instane = new SpoonacularApi.RecipesParseIngredientsNutrition();
      //expect(instance).to.be.a(SpoonacularApi.RecipesParseIngredientsNutrition);
    });

    it('should have the property nutrients (base name: "nutrients")', function() {
      // uncomment below and update the code to test the property nutrients
      //var instane = new SpoonacularApi.RecipesParseIngredientsNutrition();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new SpoonacularApi.RecipesParseIngredientsNutrition();
      //expect(instance).to.be();
    });

    it('should have the property flavonoids (base name: "flavonoids")', function() {
      // uncomment below and update the code to test the property flavonoids
      //var instane = new SpoonacularApi.RecipesParseIngredientsNutrition();
      //expect(instance).to.be();
    });

    it('should have the property caloricBreakdown (base name: "caloricBreakdown")', function() {
      // uncomment below and update the code to test the property caloricBreakdown
      //var instane = new SpoonacularApi.RecipesParseIngredientsNutrition();
      //expect(instance).to.be();
    });

    it('should have the property weightPerServing (base name: "weightPerServing")', function() {
      // uncomment below and update the code to test the property weightPerServing
      //var instane = new SpoonacularApi.RecipesParseIngredientsNutrition();
      //expect(instance).to.be();
    });

  });

}));
