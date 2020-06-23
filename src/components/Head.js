import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Head.css';
import logo from '../components/sid_logo.PNG';
export class Head extends Component {
    render() {
        return (
            <div className="header"  >
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div >
                    <ul className="menu">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT US</Link>
                        <Link>PRODUCTS</Link>
                    </ul>
                </div>
            </div>

        )
    }
}



export default Head
