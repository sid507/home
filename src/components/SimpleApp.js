import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {UseEffect} from 'react';


class SimpleMap extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 18.5034,
                    lng: 73.8750
                }}
            />
        );
    }
}

const mapStyles = {

    maxWidth: '100%',
    height: '100%',
    margin: 'auto'

};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBVG2ifCHqzp8BW6wkHaNALMXSPM5H8e_8'
})(SimpleMap);
