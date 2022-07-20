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

import ApiClient from '../ApiClient';
import InlineResponse2003ExtendedIngredients from './InlineResponse2003ExtendedIngredients';
import InlineResponse2003WinePairing from './InlineResponse2003WinePairing';

/**
 * The InlineResponse2006Recipes model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2006Recipes
 * @version 1.0
 */
class InlineResponse2006Recipes {
    /**
     * Constructs a new <code>InlineResponse2006Recipes</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2006Recipes
     * @param id {Number} 
     * @param title {String} 
     * @param image {String} 
     * @param imageType {String} 
     * @param servings {Number} 
     * @param readyInMinutes {Number} 
     * @param license {String} 
     * @param sourceName {String} 
     * @param sourceUrl {String} 
     * @param spoonacularSourceUrl {String} 
     * @param aggregateLikes {Number} 
     * @param healthScore {Number} 
     * @param spoonacularScore {Number} 
     * @param pricePerServing {Number} 
     * @param cheap {Boolean} 
     * @param creditsText {String} 
     * @param dairyFree {Boolean} 
     * @param gaps {String} 
     * @param glutenFree {Boolean} 
     * @param instructions {String} 
     * @param ketogenic {Boolean} 
     * @param lowFodmap {Boolean} 
     * @param sustainable {Boolean} 
     * @param vegan {Boolean} 
     * @param vegetarian {Boolean} 
     * @param veryHealthy {Boolean} 
     * @param veryPopular {Boolean} 
     * @param whole30 {Boolean} 
     * @param weightWatcherSmartPoints {Number} 
     * @param summary {String} 
     */
    constructor(id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, cheap, creditsText, dairyFree, gaps, glutenFree, instructions, ketogenic, lowFodmap, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, summary) { 
        
        InlineResponse2006Recipes.initialize(this, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, cheap, creditsText, dairyFree, gaps, glutenFree, instructions, ketogenic, lowFodmap, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, summary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, cheap, creditsText, dairyFree, gaps, glutenFree, instructions, ketogenic, lowFodmap, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, summary) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['image'] = image;
        obj['imageType'] = imageType;
        obj['servings'] = servings;
        obj['readyInMinutes'] = readyInMinutes;
        obj['license'] = license;
        obj['sourceName'] = sourceName;
        obj['sourceUrl'] = sourceUrl;
        obj['spoonacularSourceUrl'] = spoonacularSourceUrl;
        obj['aggregateLikes'] = aggregateLikes;
        obj['healthScore'] = healthScore;
        obj['spoonacularScore'] = spoonacularScore;
        obj['pricePerServing'] = pricePerServing;
        obj['cheap'] = cheap;
        obj['creditsText'] = creditsText;
        obj['dairyFree'] = dairyFree;
        obj['gaps'] = gaps;
        obj['glutenFree'] = glutenFree;
        obj['instructions'] = instructions;
        obj['ketogenic'] = ketogenic;
        obj['lowFodmap'] = lowFodmap;
        obj['sustainable'] = sustainable;
        obj['vegan'] = vegan;
        obj['vegetarian'] = vegetarian;
        obj['veryHealthy'] = veryHealthy;
        obj['veryPopular'] = veryPopular;
        obj['whole30'] = whole30;
        obj['weightWatcherSmartPoints'] = weightWatcherSmartPoints;
        obj['summary'] = summary;
    }

    /**
     * Constructs a <code>InlineResponse2006Recipes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2006Recipes} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2006Recipes} The populated <code>InlineResponse2006Recipes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006Recipes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('servings')) {
                obj['servings'] = ApiClient.convertToType(data['servings'], 'Number');
            }
            if (data.hasOwnProperty('readyInMinutes')) {
                obj['readyInMinutes'] = ApiClient.convertToType(data['readyInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], 'String');
            }
            if (data.hasOwnProperty('sourceName')) {
                obj['sourceName'] = ApiClient.convertToType(data['sourceName'], 'String');
            }
            if (data.hasOwnProperty('sourceUrl')) {
                obj['sourceUrl'] = ApiClient.convertToType(data['sourceUrl'], 'String');
            }
            if (data.hasOwnProperty('spoonacularSourceUrl')) {
                obj['spoonacularSourceUrl'] = ApiClient.convertToType(data['spoonacularSourceUrl'], 'String');
            }
            if (data.hasOwnProperty('aggregateLikes')) {
                obj['aggregateLikes'] = ApiClient.convertToType(data['aggregateLikes'], 'Number');
            }
            if (data.hasOwnProperty('healthScore')) {
                obj['healthScore'] = ApiClient.convertToType(data['healthScore'], 'Number');
            }
            if (data.hasOwnProperty('spoonacularScore')) {
                obj['spoonacularScore'] = ApiClient.convertToType(data['spoonacularScore'], 'Number');
            }
            if (data.hasOwnProperty('pricePerServing')) {
                obj['pricePerServing'] = ApiClient.convertToType(data['pricePerServing'], 'Number');
            }
            if (data.hasOwnProperty('analyzedInstructions')) {
                obj['analyzedInstructions'] = ApiClient.convertToType(data['analyzedInstructions'], [Object]);
            }
            if (data.hasOwnProperty('cheap')) {
                obj['cheap'] = ApiClient.convertToType(data['cheap'], 'Boolean');
            }
            if (data.hasOwnProperty('creditsText')) {
                obj['creditsText'] = ApiClient.convertToType(data['creditsText'], 'String');
            }
            if (data.hasOwnProperty('cuisines')) {
                obj['cuisines'] = ApiClient.convertToType(data['cuisines'], ['String']);
            }
            if (data.hasOwnProperty('dairyFree')) {
                obj['dairyFree'] = ApiClient.convertToType(data['dairyFree'], 'Boolean');
            }
            if (data.hasOwnProperty('diets')) {
                obj['diets'] = ApiClient.convertToType(data['diets'], ['String']);
            }
            if (data.hasOwnProperty('gaps')) {
                obj['gaps'] = ApiClient.convertToType(data['gaps'], 'String');
            }
            if (data.hasOwnProperty('glutenFree')) {
                obj['glutenFree'] = ApiClient.convertToType(data['glutenFree'], 'Boolean');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('ketogenic')) {
                obj['ketogenic'] = ApiClient.convertToType(data['ketogenic'], 'Boolean');
            }
            if (data.hasOwnProperty('lowFodmap')) {
                obj['lowFodmap'] = ApiClient.convertToType(data['lowFodmap'], 'Boolean');
            }
            if (data.hasOwnProperty('occasions')) {
                obj['occasions'] = ApiClient.convertToType(data['occasions'], ['String']);
            }
            if (data.hasOwnProperty('sustainable')) {
                obj['sustainable'] = ApiClient.convertToType(data['sustainable'], 'Boolean');
            }
            if (data.hasOwnProperty('vegan')) {
                obj['vegan'] = ApiClient.convertToType(data['vegan'], 'Boolean');
            }
            if (data.hasOwnProperty('vegetarian')) {
                obj['vegetarian'] = ApiClient.convertToType(data['vegetarian'], 'Boolean');
            }
            if (data.hasOwnProperty('veryHealthy')) {
                obj['veryHealthy'] = ApiClient.convertToType(data['veryHealthy'], 'Boolean');
            }
            if (data.hasOwnProperty('veryPopular')) {
                obj['veryPopular'] = ApiClient.convertToType(data['veryPopular'], 'Boolean');
            }
            if (data.hasOwnProperty('whole30')) {
                obj['whole30'] = ApiClient.convertToType(data['whole30'], 'Boolean');
            }
            if (data.hasOwnProperty('weightWatcherSmartPoints')) {
                obj['weightWatcherSmartPoints'] = ApiClient.convertToType(data['weightWatcherSmartPoints'], 'Number');
            }
            if (data.hasOwnProperty('dishTypes')) {
                obj['dishTypes'] = ApiClient.convertToType(data['dishTypes'], ['String']);
            }
            if (data.hasOwnProperty('extendedIngredients')) {
                obj['extendedIngredients'] = ApiClient.convertToType(data['extendedIngredients'], [InlineResponse2003ExtendedIngredients]);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('winePairing')) {
                obj['winePairing'] = InlineResponse2003WinePairing.constructFromObject(data['winePairing']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse2006Recipes.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse2006Recipes.prototype['title'] = undefined;

/**
 * @member {String} image
 */
InlineResponse2006Recipes.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse2006Recipes.prototype['imageType'] = undefined;

/**
 * @member {Number} servings
 */
InlineResponse2006Recipes.prototype['servings'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
InlineResponse2006Recipes.prototype['readyInMinutes'] = undefined;

/**
 * @member {String} license
 */
InlineResponse2006Recipes.prototype['license'] = undefined;

/**
 * @member {String} sourceName
 */
InlineResponse2006Recipes.prototype['sourceName'] = undefined;

/**
 * @member {String} sourceUrl
 */
InlineResponse2006Recipes.prototype['sourceUrl'] = undefined;

/**
 * @member {String} spoonacularSourceUrl
 */
InlineResponse2006Recipes.prototype['spoonacularSourceUrl'] = undefined;

/**
 * @member {Number} aggregateLikes
 */
InlineResponse2006Recipes.prototype['aggregateLikes'] = undefined;

/**
 * @member {Number} healthScore
 */
InlineResponse2006Recipes.prototype['healthScore'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
InlineResponse2006Recipes.prototype['spoonacularScore'] = undefined;

/**
 * @member {Number} pricePerServing
 */
InlineResponse2006Recipes.prototype['pricePerServing'] = undefined;

/**
 * @member {Array.<Object>} analyzedInstructions
 */
InlineResponse2006Recipes.prototype['analyzedInstructions'] = undefined;

/**
 * @member {Boolean} cheap
 */
InlineResponse2006Recipes.prototype['cheap'] = undefined;

/**
 * @member {String} creditsText
 */
InlineResponse2006Recipes.prototype['creditsText'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
InlineResponse2006Recipes.prototype['cuisines'] = undefined;

/**
 * @member {Boolean} dairyFree
 */
InlineResponse2006Recipes.prototype['dairyFree'] = undefined;

/**
 * @member {Array.<String>} diets
 */
InlineResponse2006Recipes.prototype['diets'] = undefined;

/**
 * @member {String} gaps
 */
InlineResponse2006Recipes.prototype['gaps'] = undefined;

/**
 * @member {Boolean} glutenFree
 */
InlineResponse2006Recipes.prototype['glutenFree'] = undefined;

/**
 * @member {String} instructions
 */
InlineResponse2006Recipes.prototype['instructions'] = undefined;

/**
 * @member {Boolean} ketogenic
 */
InlineResponse2006Recipes.prototype['ketogenic'] = undefined;

/**
 * @member {Boolean} lowFodmap
 */
InlineResponse2006Recipes.prototype['lowFodmap'] = undefined;

/**
 * @member {Array.<String>} occasions
 */
InlineResponse2006Recipes.prototype['occasions'] = undefined;

/**
 * @member {Boolean} sustainable
 */
InlineResponse2006Recipes.prototype['sustainable'] = undefined;

/**
 * @member {Boolean} vegan
 */
InlineResponse2006Recipes.prototype['vegan'] = undefined;

/**
 * @member {Boolean} vegetarian
 */
InlineResponse2006Recipes.prototype['vegetarian'] = undefined;

/**
 * @member {Boolean} veryHealthy
 */
InlineResponse2006Recipes.prototype['veryHealthy'] = undefined;

/**
 * @member {Boolean} veryPopular
 */
InlineResponse2006Recipes.prototype['veryPopular'] = undefined;

/**
 * @member {Boolean} whole30
 */
InlineResponse2006Recipes.prototype['whole30'] = undefined;

/**
 * @member {Number} weightWatcherSmartPoints
 */
InlineResponse2006Recipes.prototype['weightWatcherSmartPoints'] = undefined;

/**
 * @member {Array.<String>} dishTypes
 */
InlineResponse2006Recipes.prototype['dishTypes'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients>} extendedIngredients
 */
InlineResponse2006Recipes.prototype['extendedIngredients'] = undefined;

/**
 * @member {String} summary
 */
InlineResponse2006Recipes.prototype['summary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing} winePairing
 */
InlineResponse2006Recipes.prototype['winePairing'] = undefined;






export default InlineResponse2006Recipes;

