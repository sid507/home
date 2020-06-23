import React, { Component } from 'react'
import { Fade } from 'react-slideshow-image';
import logo1 from '../components/4.jpg';
import logo2 from '../components/5.jpg';
import logo3 from '../components/6.jpg';
import logo4 from '../components/3.jpg';

import './Slide.css';


export class Slide extends Component {



    render() {

        const fadeImages = [
            logo1,
            logo2,
            logo3,
            logo4
        ];

        const fadeProperties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: false,
            indicators: true,
            onChange: (oldIndex, newIndex) => {
                console.log(`fade transition from ${oldIndex} to ${newIndex}`);
            }
        }

        return (
            <div className="slide-container">
                <Fade {...this.fadeProperties}>
                    <div className="each-fade">
                        <div>
                            <img className="image-container" src={fadeImages[0]} />
                        </div>

                    </div>
                    <div className="each-fade">
                        <div >
                            <img className="image-container" src={fadeImages[1]} />
                        </div>

                    </div>
                    <div className="each-fade">
                        <div >
                            <img className="image-container" src={fadeImages[2]} />
                        </div>

                    </div>
                    <div className="each-fade">
                        <div >
                            <img className="image-container" src={fadeImages[3]} />
                        </div>

                    </div>
                </Fade>
            </div>
        )
    }
}

export default Slide
