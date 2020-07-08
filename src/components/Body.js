import React, { Component } from 'react';
import logo1 from '../components/rioo.jpg';
import logo2 from '../components/enox.jpg';
import logo3 from '../components/Enox-Logo.png';
import logo4 from '../components/logorio.jpg';
import love from '../components/love.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';



import './body.css';
AOS.init(
    {
        offset: '200',
        duration: 1000
    }
);
export class Body extends Component {

    render() {
        return (
            <div className="container">
                <div className="bodyCon" data-aos="fade-left">
                    <img src={love}></img>
                </div>
                <div>
                    <p>COMPANIES WE WORK WITH</p>
                </div>

                <section className="grid" data-aos="fade-right">
                    <div>
                        <h3>ENOX</h3>
                        <p>ENOX as a brand is extensively used in mid level markets across all sectors of the industry like Hospitality, Commercial, Residential, Infrastructure and Healthcare. ENOX Hardware has a diversified product portfolio ranging from door controls' hardware to aluminum profiles to furniture fittings but our major business churning products are Glass Architectural Hardware and Glass Sliding Solutions.</p>
                    </div>
                    <img src={logo2} ></img>

                </section>
                <section className="grid" data-aos="fade-left">
                    <div>
                        <h3>RIOO</h3>
                        <p>We provide solutions to security issues of things you care about with our door locking systems. You can now have your door locked-unlocked with your finger print with the help of Biometric engineering. Rioo has a vision to introduce electronic door locking to the Indian Market.</p>
                    </div>
                    <img src={logo1} ></img>
                </section>
            </div>
        )
    }
}

export default Body
