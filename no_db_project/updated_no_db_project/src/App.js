import React, { Component } from 'react';
import './App.css';
import Recipehead from './recipeHeader'

import RecipeComponent from './recipeComponent'
import FavHead from './favoritesHeader';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipehead/> 
        <RecipeComponent/>
       

      </div>
    );
  }
}


