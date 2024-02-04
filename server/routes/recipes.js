const express = require('express')
const Recipe = require('../models/RecipesModel')
const router = express.Router()

//Get all recipes
router.get('/', (req, res) => {
    res.json({
        message: 'GET all recipes'
    })
})

//Get one recipe
router.get('/:id', (req, res) => {
    res.json({
        message: 'GET one recipe'
    })
})

//Post a new recipe
router.post('/',async (req, res) => {
    const {title, difficulty} = req.body

    try{
        const recipe = await Recipe.create({title, difficulty})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

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