require('dotenv').config(); //Adding enviroment variabels for the process obj


const express = require('express');  //require the express package
const mongoose = require('mongoose'); //import the data base
const recipeRoutes = require('./routes/recipes');

// Express app
const app = express();

// Middleware & static files
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Register view engine
app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB & listen for requests
mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        // Listen for requests
        const PORT = process.env.PORT || 3000; // Ensure PORT is correctly defined
        app.listen(PORT, () => {
            console.log(`Connected to DB & listening on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));
