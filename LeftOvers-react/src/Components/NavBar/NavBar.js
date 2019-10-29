import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logout from './logout.svg'

const NavBar = ({ logOut }) => {
    return (
        <div className='navbar'>
            <div className='link-container'>
                <h4 className='link navbar-title'>LeftOvers</h4>
                <span className='links'>
                    <NavLink className='link' to='/'>Home</NavLink>
                    <NavLink className='link' to='/fridge'>Fridge</NavLink>
                    <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
                    <NavLink className='link' to='/recipe'>Find a Recipe</NavLink>
                </span>
            </div>
            <img src={logout} alt='logout button' className='logout-button' onClick={logOut} />
        </div>
    );
}

export default NavBar;
