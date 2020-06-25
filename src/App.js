import React, { useState } from 'react';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

import Recipe from './components/Recipe'

import './App.css';

function App() {

  // Use State

  const [query,setQuery] = useState("")
  let [recipes,setRecipes] = useState([])

  const APP_ID = '3f3739f2'
  const APP_KEY = '084cfc002816dd6afcc27f9b4bec3986	'
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`



  const  getData = async () => {
      await axios.get(url)
      .then(res => {
      const newRecipe = res.data.hits
      console.log(newRecipe)
       setRecipes(newRecipe)
      console.log(query)
    })
    setQuery('')
  }

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData()
 
  }


  return (
    <div className="App">
      <h1>Food Searching App</h1>

    <form className = 'search-form' onSubmit = {onSubmit}>
      <input type='text' placeholder='Search Food' onChange = {onChange} value = {query} />
      <input type='submit' value='Search'/>
    </form>

    <div className = 'recipies'>
    
      {recipes.length? recipes.map((recipe) =><Recipe key = {uuidv4()} recipe = {recipe}/>) : null}
    </div>

    </div>
  );
}

export default App;
