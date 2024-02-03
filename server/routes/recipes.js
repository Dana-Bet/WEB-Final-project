const express = require('express')

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
router.post('/', (req, res) => {
    res.json({
        message: 'POST a new recipe'
    })
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