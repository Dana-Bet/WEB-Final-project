require('dotenv').config()


const express = require('express');
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


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
print("sdfv")

