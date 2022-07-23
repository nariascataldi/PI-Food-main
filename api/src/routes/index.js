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
    if (title) {
        let recipeQuery = await recipesTotal.filter(r => r.title.toLowerCase().includes(title.toLowerCase()));
        recipeQuery.length ?
            res.status(200).send(recipeQuery) :
            res.status(404).send(`No está la Receta ${title}`);
    } else {
        res.status(200).send(recipesTotal)
    }
});
router.get('/recipes/:id', async (req, res) => {
    const id = req.params.id;
    const recipesTotal = await model.getAllRecipes();
    if (id) {
        const recipesID = await recipesTotal.filter(r => r.id == id);
        recipesID.length ?
            res.send(recipesID) :
            res.send('No se encontró la receta')
    } else {
        res.send('Ingrese un Id')
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
        creditsText
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
router.get('/diets', async (req, res) => {
    const dietsApi = await axios.get(API_RECIPES_INFO);
    const diets = dietsApi.data.results.flatMap(d => d.diets);

    diets.forEach((t) => {
        Diet.findOrCreate({
            where: { title: t }
        })
    });
    const allDiets = await Diet.findAll()
    res.send(allDiets)
})
module.exports = router;

//-------------------PARA-EL-POST--------------------------------------
/*
{
    "title":"Anchi, a base de sémola de maíz amarilla",
    "summary":"Es una receta tradicional en Salta riquísimo y muy sana",
    "healthScore":100,
    "analyzedInstructions":
    [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                        "ingredients": [
                            {
                                "id": 10011135,
                                "name": "cauliflower florets",
                                "localizedName": "cauliflower florets",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 10111135,
                                "name": "cauliflower rice",
                                "localizedName": "cauliflower rice",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 20028,
                                "name": "couscous",
                                "localizedName": "couscous",
                                "image": "couscous-cooked.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    }
                ]
            }
    ]
,
    "image": "https://img-global.cpcdn.com/recipes/798fa31743163a73/1280x1280sq70/photo.webp",
    "diet": "vegetarian, vegan, gluten free, fodmap friendly"
},
 */