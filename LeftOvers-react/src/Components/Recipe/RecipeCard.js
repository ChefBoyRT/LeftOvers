import React from 'react'

export default function RecipeCard({ recipe }) {
    return (
        <div>
            <div className='recipe-card'>
                <h1 className='recipe-title'>{recipe.title}</h1>
                <img className='recipe-img' src={recipe.image} alt={recipe.name} />
                <h4 className='recipe-likes'>{recipe.likes} <span role='img' aria-label='jsx-a11y/accessible-emoji'>👍</span></h4>
                <ul className='ingredient-title'>Missing Ingredients
                    <div className='ingredient-list'>
                    {recipe.missedIngredients.map(ingredient => {
                        return<li key={ingredient.id}>{ingredient.amount < 1 ? ingredient.amount.toFixed(2) : ingredient.amount} {ingredient.unitShort} {ingredient.name}</li>
                    })}
                    </div>
                </ul>
            </div>
        </div>
    )
}
