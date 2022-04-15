const express = require('express')
const Recipes = require('../models/Recipes')
const router = express.Router()
router.get('/add', (req, res) => {
    res.render('addRecipes')
})
router.post('/add', async (req, res) => {
    try {
        const newRecipes = new Recipes({
            title: req.body.title,
            photo: req.body.photo,
            text: req.body.text,
            prep: req.body.prep,
            cook: req.body.cook,
            serving: req.body.serving,
            instructions: req.body.instructions,
            ingredients: req.body.ingredients,
            tools: req.body.tools,
            species: req.body.species,
        })
       
        if(newRecipes){
            const recipes = await newRecipes.save()
           res.redirect('/')   
        }
    } catch (err) {
        res.status(500).send(err)       
    }
})
module.exports = router