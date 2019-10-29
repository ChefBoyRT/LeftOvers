import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'

export default class App extends Component {
  state = {
    loggedIn: false,
    token: '',
    foods: [
    //   {
    //   "expiration_date": "2019-10-25",
    //   "food_category": "vegetable",
    //   "food_name": "Carrot",
    //   "id": 23,
    //   "quantity": "2.6",
    //   "quantity_unit": "lbs",
    //   "user": 
    //   {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   },
    //   "value": "2.3",
    // },
    // {
    //   "expiration_date": "2019-10-22",
    //   "food_category": "pork",
    //   "food_name": "Tomato",
    //   "id": 21,
    //   "quantity": "3.0",
    //   "quantity_unit": "lbs",
    //   "user": {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   }
    // },
    // {
    //   "expiration_date": "2019-10-22",
    //   "food_category": "pork",
    //   "food_name": "Tomato",
    //   "id": 21,
    //   "quantity": "3.0",
    //   "quantity_unit": "lbs",
    //   "user": {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   }
    // },
    // {
    //   "expiration_date": "2019-10-22",
    //   "food_category": "pork",
    //   "food_name": "Tomato",
    //   "id": 21,
    //   "quantity": "3.0",
    //   "quantity_unit": "lbs",
    //   "user": {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   }
    // },
    // {
    //   "expiration_date": "2019-10-22",
    //   "food_category": "pork",
    //   "food_name": "Tomato",
    //   "id": 21,
    //   "quantity": "3.0",
    //   "quantity_unit": "lbs",
    //   "user": {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   }
    // },
    // {
    //   "expiration_date": "2019-10-22",
    //   "food_category": "pork",
    //   "food_name": "Tomato",
    //   "id": 21,
    //   "quantity": "3.0",
    //   "quantity_unit": "lbs",
    //   "user": {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   }
    // },
    // {
    //   "expiration_date": "2019-10-22",
    //   "food_category": "pork",
    //   "food_name": "Tomato",
    //   "id": 21,
    //   "quantity": "3.0",
    //   "quantity_unit": "lbs",
    //   "user": {
    //     "id": 2,
    //     "password_digest": "$2a$12$wrKTaS/jhgq.ZD/6IK4tUuzHamVldGdmsmN/vUFJXBdzUNOPSagSK",
    //     "username": "test",
    //   }
    // }
  ]
  }

  logIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  fetchFoods = async (auth_token) => {
    this.logIn()
    try {
      const response = await fetch('https://leftovers-api.herokuapp.com/foods', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });
      const foods = await response.json();
      return this.setState({
        foods: foods,
        token: auth_token
      });
    }
    catch (error) {
      return console.log('Error:', error);
    }
  }

  render() {
    return (
      <View>
        {
        this.state.loggedIn
          ? <Home 
              foods={this.state.foods} 
            />
          : <LoginForm 
              fetchFoods={this.fetchFoods}
            />
        }
      </View>
    )
  }
}
