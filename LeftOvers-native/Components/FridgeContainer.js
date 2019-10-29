import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import FoodTable from './FoodTable'

const FridgeContainer = ({ foods, toggleRecipes }) => {
    return (
        <View style={style.background}>
            <Text style={style.title}>Fridge</Text>
            <View style={style.imageContainer}>
                <Image
                    source={require('../assets/fridge.png')}
                    style={style.image}
                />
                <Text style={style.count}>{foods.length}</Text>
            </View>
            <View style={style.table}>
                <FoodTable foods={foods} />
            </View>
            <Button
                title='Find Recipes'
                onPress={toggleRecipes}
                color='black'
            />
        </View>
    )
}

export default FridgeContainer

const style = StyleSheet.create({
    background: {
        // padding: 50, 
        backgroundColor: 'white', 
        height: '100%'
    },
    count: {
        position: 'relative',
        bottom: 100,
        left: 175,
        fontSize: 50
    },
    title: {
        fontSize: 50,
        marginTop: 50,
        textAlign: 'center'
    },
    image: {
        height: 200,
        width: 100,
        marginTop: 50,
        alignSelf: 'center'
    },
    table: {
        textAlign: 'center',
        marginBottom: 50
    }
})
