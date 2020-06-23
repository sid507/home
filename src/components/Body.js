import React, { Component } from 'react';
import logo1 from '../components/rioo.jpg';
import logo2 from '../components/enox.jpg';
import logo3 from '../components/Enox-Logo.png';
import logo4 from '../components/logorio.jpg';

import './body.css';

export class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="bodyCon">
                    <p>WELCOME TO <span style={{ color: '#183c65' }}>SIDDHARTH</span> <span style={{ color: '#fcac32' }}>ENTERPRISE</span></p>
                </div>
                <div>
                    <p>COMPANIES WE WORK WITH</p>
                </div>

                <div className="grid">

                    <p><div className="head">ENOX</div>ENOX as a brand is extensively used in mid level markets across all sectors of the industry like Hospitality, Commercial, Residential, Infrastructure and Healthcare. ENOX Hardware has a diversified product portfolio ranging from door controls' hardware to aluminum profiles to furniture fittings but our major business churning products are Glass Architectural Hardware and Glass Sliding Solutions.</p>
                    <img src={logo2} ></img>
                </div>
                <div className="grid">

                    <p><div className="head">RIOO</div>We provide solutions to security issues of things you care about with our door locking systems. You can now have your door locked-unlocked with your finger print with the help of Biometric engineering. Rioo has a vision to introduce electronic door locking to the Indian Market.</p>
                    <img src={logo1} ></img>
                </div>
            </div>
        )
    }
}

export default Body
