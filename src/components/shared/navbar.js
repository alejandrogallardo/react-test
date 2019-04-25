import React, { Component } from 'react';
// import './app.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar-light bg-light">
                <div className="container"> 
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">                            
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;