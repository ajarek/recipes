const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const RecipesSchema = new mongoose.Schema({
  
    title: {
        type: String,    
    },
    photo: {
        type: String,
    },
    text: {
        type: String,
    },
    prep: {
        type: String,
    },
    cook: {
        type: String,
    },
    serving: {
        type: String,
    },
    instructions: {
        type: String,
    },
    ingredients  : {
        type: String,
    },
    tools: {
        type: String,
    },
    species: {
        type: String,
    },
}, {
    timestamps: true,
})
module.exports = mongoose.model('Recipes',RecipesSchema)
