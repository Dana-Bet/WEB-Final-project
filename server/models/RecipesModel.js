const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Define the enum values for difficulty
const difficultyEnum = ['beginner', 'intermediate', 'advanced'];
const ingredientEnum = ['eggs', 'flour', 'sugar', 'milk', 'butter'];

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: difficultyEnum,
        required: true // Optionally, you can make the difficulty field required
    },
    ingredients: {
        type: [String], // Assuming ingredients is an array of strings
        enum: ingredientEnum,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)
