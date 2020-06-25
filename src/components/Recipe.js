import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'

const Recipe = ({recipe}) => {
    const [show,setShow] = useState(false)
    const {image,label,url,ingredients} = recipe.recipe;
    
    return (
        <div className = 'recipe'>
            <h2>{label}</h2>
            <img src={image} alt = {label}/>
             { // eslint-disable-next-line
            <a ahref={url} target = '_blank' rel = 'noopener'> URL </a>
             }
            <button onClick = { () => setShow(!show) }> Ingradients </button>

           { show && <RecipeDetails ingredients = {ingredients}/>}
        </div>
    )
}

export default Recipe
