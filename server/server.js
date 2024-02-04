require('dotenv').config()


const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes');

//express app
const app = express();

//middleware & static files
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//register view engine
app.use('/api/recipes', recipeRoutes)

//connect to mongodb & listen for requests
mongoose.connect(process.env.MONGO_URI) 
    .then(result => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port', process.env.PORT)
        })
    })
    .catch(err => console.log(err))


