import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function RecipeCard({ recipe }) {

    const missingIngredients = (recipe) => {
        return recipe.missedIngredients.map((ingredient, index) => {
            return <Text key={index} style={style.list}>{ingredient.amount.toFixed(2)} {ingredient.unitShort} {ingredient.name}</Text>
        })
    }

    return (
        <View style={style.card}>
            <Image source={{uri: recipe.image}} style={style.image} alt={recipe.name} />
            <Text style={style.title}>{recipe.title}</Text>
            <Text style={style.listTitle}>Missing Ingredients</Text>
            {missingIngredients(recipe)}
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        padding: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 25,
        width: 250
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    list: {
        textAlign: 'center'
    },
    listTitle: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        height: 150, 
        width: 150, 
        alignSelf: 'center',
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 1
    }
})