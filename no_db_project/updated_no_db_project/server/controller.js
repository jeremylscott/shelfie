const axios = require('axios')
let recipes = []
let id = 0;

axios.get('http://www.recipepuppy.com/api/')
         .then(response => recipes = response.data.results.map((element,index) => {
             return {
                 id: index,
                 title: element.title,
                 href: element.href,
                 thumbnail: element.thumbnail
                }
            }))    

getRecipes = (req,res) => {
    res.json(recipes)  
}

postComment = (req,res) => {
    recipes.push(req.body)
    res.json(recipes)
}

deleteRecipe = (req,res) => {
    recipes.splice(req.params.id,1)
    res.json(recipes)
}

updateRecipe = (req,res) => {
    recipes.splice(req.params.id,1,req.body.ingredients)
    res.json(recipes)
}


module.exports = {
    getRecipes,
    postComment,
    deleteRecipe,
    updateRecipe
}