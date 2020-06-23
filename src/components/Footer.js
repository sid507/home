import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

            <div>
                <p style={footerstyle}>Contact:siddharthent18@gmail.com</p>
                <p style={footerstyle}>Call Us:9702203642/9049003377</p>
                <p style={footerstyle} >© 2020 SIDDHARTH ENTERPRISES. ALL RIGHT RESERVED</p>
            </div>
        )
    }
}

const footerstyle = {
    margin: 'auto',
    textAlign: 'center',
    margin: '20px',
    fontSize: '13px',
    fontWeight: 'bold'
}

export default Footer
