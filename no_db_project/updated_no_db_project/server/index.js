const express = require('express')
const {json} = require('body-parser')
const app = express()
const port = 4001
app.use(json())

const {getRecipes,postComment,deleteRecipe,updateRecipe} = require('./controller')

//requests for the data to populate the back end server.
app.get('/api/recipes', getRecipes)
app.post('/api/recipes', postComment)
app.delete('/api/recipes', deleteRecipe)
app.put('/api/recipes', updateRecipe)




app.listen(port, () => console.log(`Listening to port: ${port}`))