import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeContainer({ recipes }) {
    
    const recipeCards = () => {
        return recipes.map(recipe => {
            return <RecipeCard key={recipe.id} recipe={recipe} />
        })
    }
    
    return (
        <div  className='recipes-component'>
            {recipeCards()}
        </div>
    )
}
