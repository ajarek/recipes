const express = require('express');
const mongoose = require('mongoose');
const {port,database}=require('./config')
const app = express();
mongoose.connect(database,()=>{
    console.log("Connecting to Database")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(require('./routes/home'))
app.use(require('./routes/add-recipes'))
app.use(require('./routes/contact'))
app.use(require('./routes/about'))

app.listen(port,()=>{
    console.log("Server is running on port "+port)
})