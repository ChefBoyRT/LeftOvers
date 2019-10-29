import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function LoginForm({ fetchFoods }) {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')

  const usernameInputHandler = (enteredUsername) => {
    setEnteredUsername(enteredUsername)
  }
  
  const passwordInputHandler = (enteredPassword) => {
    setEnteredPassword(enteredPassword)
  }

  const handleSubmit = () => {
    fetch('https://leftovers-api.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: enteredUsername,
                password: enteredPassword
            }
        })
    })
    .catch(error => console.error('Error:', error))
    .then(response => response.json())
    .then(response => checkUser(response))
}

const checkUser = (response) => {
    response.jwt
    ? invokeLogIn(response.jwt)
    : console.log('Not Found')
}

const invokeLogIn = (auth_token) => {
    fetchFoods(auth_token)
}

  return (
    <View style={style.background}>
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={style.title}>LeftOvers</Text>
        <Text style={style.message}>Please enter your username and password</Text>
        <TextInput 
          placeholder='username'
          placeholderTextColor='white'
          style={style.input} 
          onChangeText={usernameInputHandler}
          value={enteredUsername}
        />
        <TextInput 
          placeholder='password'
          placeholderTextColor='white'
          style={style.input} 
          onChangeText={passwordInputHandler} 
          value={enteredPassword}
        />
        <Button
          title='Log In'
          onPress={handleSubmit}
          color='white'
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderColor: 'black', 
    borderBottomWidth: 1,
    borderColor: 'white', 
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    color: 'white'
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 100,
    color: 'white'
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    color: 'white'
  },
  background: {
      padding: 50, 
      backgroundColor: 'rgb(42, 42, 58)', 
      height: '100%'
  }
})