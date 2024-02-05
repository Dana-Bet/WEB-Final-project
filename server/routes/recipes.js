const express = require('express')
const {
    getRecipe,
    getRecipes,
    createRecipe
} =require('../controllers/recipeController')

const router = express.Router()

//Get all recipes
router.get('/', getRecipes)

//Get single recipe
router.get('/:id', getRecipe)

//Post a new recipe
router.post('/',createRecipe)

//Update a recipe 
router.patch('/:id', (req, res) => {
    res.json({
        message: 'UPDATE a recipe'
    })
})

//Delete a recipe 
router.delete('/:id', (req, res) => {
    res.json({
        message: 'DELETE a recipe'
    })
})



module.exports = router