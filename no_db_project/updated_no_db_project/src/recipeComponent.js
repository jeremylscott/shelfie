import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DeleteRecipe from './DeleteRecipe';
import FavHead from './favoritesHeader';
import RecipeHeader from './recipeHeader'
import Favorites from './favorites'
import UpdateRecipe from './updateRecipe'
import App from './App'
import Signature from './signature'

export default class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            favorites: []
        }
    }

    componentDidMount() {
        axios
        .get('/api/recipes')
        .then(results => {
        this.setState({recipes: results.data})
        })
      }
    
    handleDelete = (id) => {
        axios.delete(`/api/recipes/${id}`)
        .then((response) =>
        this.setState({recipes: response.data}) )
    }

    handleUpdate = (id,ingredients) => {
        axios
        .put(`/api/recipes/${id},{text}`)
        .then(results => {
        this.setState({recipes:results.data})
        })
    }

    // addToFaves = () => {
    //     this.setState({favorites})
    // }



    render() {
        console.log(this.state.recipes)

        let recipeList = this.state.recipes.map((recipe) => {
            return ( 
                <div className='recipeWrapper' key={this.state.recipes.id}>
                    <h6 className='recipeTitle'><span>{this.state.recipes.title}</span></h6>
                    <img className='recipeImg' src={this.state.recipes.thumbnail}/>
                    <div className='recipeText'>
                    <p>Ingredients: {this.state.recipes.ingredients}</p>
                    <a href={this.state.recipes.href}>Recipe</a>
                    <button onClick={this.addToFaves}>+Favorite</button>
                    <button onClick={this.handleUpdate}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                    
                    </div>
                </div>
            )
        })

        return (
            <div>
                {recipeList}
                <FavHead/> 
                <Signature/> 
            </div>
                

        )
    }
}

// <div className='recipeWrapper' key={props.id}>
//                     <h6 className='recipeTitle'><span>{props.title}</span></h6>
//                     <img className='recipeImg' src={props.picture}/>
//                     <div className='recipeText'>
//                     <p>Ingredients: {props.ingredients}</p>
//                     <a href={props.href}>Recipe</a>
//                     </div>
//                     <div>
//                         <favoritesHeader/>
//                     </div>
//                  </div>


        // <App
        // key={this.state.recipes.id}
        // title={this.state.recipes.title}
        // picture={this.state.recipes.thumbnail}
        // ingredients={this.state.recipes.ingredients}
        // recipeLink={this.state.recipes.href}
        // addToFaves={this.addToFaves}
        // removeFaves={this.handleDelete} 
        // updateRecipe={this.updateRecipe}/>