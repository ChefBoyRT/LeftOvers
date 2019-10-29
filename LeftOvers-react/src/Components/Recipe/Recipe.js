import React, { Component } from 'react'
import './Recipe.css'
import RecipeContainer from './RecipeContainer'

export default class Recipe extends Component {

    state = {
        recipes: []
    }

    componentDidMount() {
        this.fetchRecipes()
    }

    query = () => {
        let foods = this.props.foods
        let ingredients = foods.map(food => {
            return food.food_name.toLowerCase() + '%2C'
        })
        return ingredients.join('')
    }

    fetchRecipes = async () => {
        let urlQuery = this.query()
        let url = `https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=12&ingredients=${urlQuery}`
        let apiKey = process.env.REACT_APP_RECIPE_API_KEY
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com',
                    'x-rapidapi-key': apiKey
                }
            })
            const recipes = await response.json()
            return this.setState({ recipes: recipes })
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <div className='div-soup'>
                    <h1 className='recipe-page-title'>Recipes</h1>
                    {/* <button className='get-recipes-button' onClick={this.fetchRecipes}>Get Recipes</button> */}
                </div>
                <div>
                    {this.state.recipes.length > 0
                    ? <RecipeContainer recipes={this.state.recipes} />
                    : null
                    }
                </div>
            </>
        )
    }
}

