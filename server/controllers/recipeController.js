const Recipe = require('../models/RecipesModel')
const mongoose = require('mongoose')
// get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({createdAt: -1})

    res.status(200).json(recipes)
}

// get a single recipe
const getRecipe = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such recipe'})
    }
    const recipe = await Recipe.findById(id)

    if(!recipe) {
        return res.status(404).json({error: 'No such recipe'})
    }

    res.status(200).json(recipe)
}
// create new recipe
const createRecipe = async (req, res) => {
    const {title, difficulty} = req.body

    // add doc to DB
    try{
        const recipe = await Recipe.create({title, difficulty})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// delete a recipe

// update a recipe

module.exports = {
    getRecipe,
    getRecipes,
    createRecipe
}