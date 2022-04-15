const express = require('express');
const Recipes = require('../models/Recipes');
const router = express.Router()


router.get('/', async (req, res) => {
    try {       
      const recipes = await Recipes.find({})
        res.render('home', {
            myhome: recipes
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/home/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const getRecipes = await Recipes.findOne({
            _id: id
        })
        res.render('particularRecipes', {
            recipes: getRecipes
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router