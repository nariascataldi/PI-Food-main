const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const axios = require('axios');
const { API_RECIPES_INFO } = require('../utils/config');

const model = require('../apiInfo/allData');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {
    res.send('Prueba de que todo irá bien')
})
router.get('/recipes', async (req, res) => {
    const title = req.query.title;
    let recipesTotal = await model.getAllRecipes();
    try {
        if (title) {
            let recipeQuery = await recipesTotal.filter(r => r.title.toLowerCase().includes(title.toLowerCase()));
            recipeQuery.length ?
                res.status(200).send(recipeQuery) :
                res.status(404).send(`No está la Receta ${title}`);
        } else {
            res.status(200).send(recipesTotal)
        }
    } catch (error) {
        console.log('ALL RECIPES ', error);
    }
});
router.get('/recipes/:id', async (req, res) => {
    const id = req.params.id;
    const recipesTotal = await model.getAllRecipes();
    try {
        if (id) {
            const recipesID = await recipesTotal.filter(r => r.id == id);
            recipesID.length ?
                res.send(recipesID) :
                res.send('No se encontró la receta')
        } else {
            res.send('Ingrese un Id')
        }        
    } catch (error) {
        console.log('ID ', error);
    }
})
router.post('/recipes', async (req, res) => {
    const {
        title,
        summary,
        healthScore,
        analyzedInstructions,
        image,
        createInDb,
        diet,
        creditsText,
        // TODO: agregar los booleanos
    } = req.body;
    const recipeCreated = await Recipe.create({
        title,
        summary,
        healthScore,
        analyzedInstructions,
        image,
        createInDb,
        creditsText
    });
    let dietDb = await Diet.findAll({ where: { title: diet } });

    recipeCreated.addDiet(dietDb);
    res.send('Receta creada con éxito')
});

//modifico destructuring

router.get('/types', async (req, res, next) => {
    try {
        const diets = await Diet.findAll();
        diets.length ?
            res.send(diets) :
            res.send('error al traer dietas');
    } catch (error) {
        next(error);
    }
})
module.exports = router;

//-------------------PARA-EL-POST--------------------------------------
/*
{
    "title":"Anchi, a base de sémola de maíz amarilla",
    "summary":"Es una receta tradicional en Salta riquísimo y muy sana",
    "healthScore":100,
    "analyzedInstructions":[
            "In a small mixing bowl or blender, combine all of the ingredients for the balsamic marinade except for the lemon juice (balsamic vinegar, apple cider vinegar, 1 tbsp grapeseed oil, honey, dried dill, herbs de provence, salt and pepper).",
            "Whisk or blend until oil and vinegar are well incorporated and no longer separate.",
            "Place salmon fillet in a baking dish (I use a small casserole dish).",
            "Pour the marinade over the salmon and allow it to marinate for at least 15 minutes (or up to 24 hours covered in the refrigerator).  Turn your oven on high broil. Just before putting the salmon in the oven, drizzle the lemon juice over the fish.",
        ],
    "image": "https://img-global.cpcdn.com/recipes/798fa31743163a73/1280x1280sq70/photo.webp",
    "diet": "vegetarian, vegan, gluten free, fodmap friendly",
    "creditsText": "Abuela Emilia"
}
 */