import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Fridge from '../Fridge/Fridge'
import WasteDashboard from '../Waste/WasteDashboard'
import Recipe from '../Recipe/Recipe'
import HomePage from '../Home/HomePage'
import './Home.css'

export default class Home extends Component {
    render() {
        const { logOut } = this.props
        return (
            <div className='home-container'>
                <Router>
                    <div>
                        <NavBar logOut={logOut}/>
                        <div className='component-container'>
                        <Route exact path='/' render={(props) => <HomePage {...this.props} />} />
                        <Route exact path='/fridge' render={(props) => <Fridge {...this.props} />} />
                        <Route exact path='/dashboard' render={(props) => <WasteDashboard {...this.props} />} />
                        <Route exact path='/recipe' render={(props) => <Recipe {...this.props} />} />
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
