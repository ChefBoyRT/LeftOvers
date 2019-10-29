import React, { Component } from 'react'
import CreateUserForm from '../CreateUser/CreateUserForm'
import LoginForm from './LoginForm'
import './Login.css'

export default class Login extends Component {
    state = {
        newUser: false
    }

    handleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render() {
        const { newUser } = this.state
        return (
            <div className='login-container'>
                <h1 className='login-title'>Welcome to LeftOvers</h1>
                {newUser ? null : <h4 className='login-message'>Please log in or create a new account</h4>}
                {newUser
                ? <CreateUserForm toggleNewUser={this.handleNewUser} fetchFoods={this.props.fetchFoods} />
                : <LoginForm fetchFoods={this.props.fetchFoods} fetchWastes={this.props.fetchWastes} handleNewUser={this.handleNewUser} />
                }
            </div>
        )
    }
}



           