import React from 'react'
import { v4 as uuid } from 'uuid'

export default function RecipeDetails({ingredients}) {
    return ingredients.map(ingredient => {
        return (
            <ul key = {uuid()} className = 'ingredient-list'>
               <li className = 'ingredient-text'>
                   {ingredient.text}
               </li>
               <li className = 'ingredient-weight'>
                   {ingredient.weight}
               </li>
            </ul>
        )
    })
}
