import React, { Component } from 'react';
import './App.css';

import Home from './Components/Home/Home'
import Login from './Components/Login/Login'


class App extends Component {
  state = {
    loggedIn: false,
    foods: [],
    wastes: []
  }
  
  componentDidMount() {
    if (localStorage.getItem('token')){
      this.fetchFoods()
      this.fetchWastes()
    }
  }

  logIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  logOut = () => {
    localStorage.clear()
    window.location.href = 'https://leftovers.netlify.com/'
    this.setState({
      loggedIn: false,
      foods: [],
      wastes: []
    })
  }

  fetchWastes = () => {
    return fetch('https://leftovers-api.herokuapp.com/wastes', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(wastes => this.setState({
      wastes: wastes
    }))
    .catch(error => console.log('Error:', error))
  }

  fetchFoods = () => {
    this.logIn()
    return fetch('https://leftovers-api.herokuapp.com/foods', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(foods => this.setState({
      foods: foods
    }))
    .catch(error => console.log('Error:', error))
  }

  addFood = (food) => {
    const body = {...food}
    let url = 'https://leftovers-api.herokuapp.com/foods'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(response => this.setState({
      foods: [...this.state.foods, response]
    }))
    .catch(error => console.log('Error:', error))
  }

  deleteFood = (id) => {
    const body = {id}
    const newState = this.state.foods.filter(food => food.id !== id)
    let url = `https://leftovers-api.herokuapp.com/foods/${id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .catch(error => console.log(error))
    .then(this.setState({
      foods: newState
    }))
  }

  updateFood = (food) => {
    const body = {...food}
    const newState = this.state.foods.filter(f => f.id !== food.id)
    let url = `https://leftovers-api.herokuapp.com/foods/${food.id}`
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .catch(error => console.error('Error:', error))
    .then(this.setState({
      foods: [...newState, food]
    }))
  }

  addWaste = (waste) => {
    const body = {...waste}
    const newState = [...this.state.wastes, waste]
    let url = 'https://leftovers-api.herokuapp.com/wastes'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .then(this.setState({
      wastes: newState
    }))
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.log('Error:', error))
  }

  render() {
    return (
      <div className="App">
        {
        this.state.loggedIn
          ? <Home 
                logOut={this.logOut} 
                foods={this.state.foods} 
                addFood={this.addFood} 
                deleteFood={this.deleteFood} 
                updateFood={this.updateFood} 
                addWaste={this.addWaste}
                wastes={this.state.wastes}
                data={this.state.wastes}
                />
          : <Login 
                fetchFoods={this.fetchFoods} 
                fetchWastes={this.fetchWastes} 
                />
        }
      </div>
    );
  }
}
export default App;
