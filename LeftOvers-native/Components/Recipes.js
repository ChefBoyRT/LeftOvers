import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import RecipeCard from './RecipeCard'
import { RECIPE_API_KEY } from 'react-native-dotenv'

export default class Recipes extends Component {

    state = {
        recipes: []
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
        let url = `https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients=${urlQuery}`
        let apiKey = {RECIPE_API_KEY}
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com',
                    'x-rapidapi-key': apiKey.RECIPE_API_KEY
                }
            })
            const recipes = await response.json()
            return this.setState({ recipes: recipes })
        }
        catch (error) {
            console.log(error)
        }
    }

    createRecipeCards = () => {
        this.fetchRecipes()
        let cards = this.state.recipes.map(recipe => {
            return <RecipeCard key={recipe.id} recipe={recipe} />
        })
        return cards
    }

    render() {
        return (
            <View style={style.background}>
                <Text style={style.title}>Recipes</Text>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={style.background}>
                        {this.createRecipeCards()}
                        <Button 
                            title='Back to Fridge'
                            onPress={this.props.toggleRecipes}
                            color='black'
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    background: {
        padding: 10,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        marginTop: 40,
        marginBottom: 25,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
})