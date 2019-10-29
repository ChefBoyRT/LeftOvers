import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import FridgeContainer from './FridgeContainer';
import Recipes from './Recipes';

export default class Home extends Component {

    state = {
        recipes: false
    }

    toggleRecipes = () => {
        this.setState({recipes: !this.state.recipes})
    }

    render() {
        return (
            <View style={style.background}>
                {!this.state.recipes
                    ? <FridgeContainer foods={this.props.foods} toggleRecipes={this.toggleRecipes} />
                    : <Recipes foods={this.props.foods} toggleRecipes={this.toggleRecipes} />
                }
            </View>
        )
    }
}

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
        textAlign: 'center'
    }
})

// style={{backgroundColor: 'white', height: 500, borderColor: 'black', borderWidth: '1px'}}

{/* <Text style={style.title}>Fridge</Text>
                <View style={style.imageContainer}>
                    <Image
                        source={require('../assets/fridge.png')}
                        style={style.image}
                    />
                    <Text style={style.count}>{this.props.foods.length}</Text>
                </View>
                <View style={style.table}>
                    <FoodTable foods={this.props.foods} />
                </View> */}