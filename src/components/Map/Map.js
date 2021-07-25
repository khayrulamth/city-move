import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends Component {
        static defaultProps = {
            
            center: {
                lat: 23.777176,
                lng: 90.399452
            },
            zoom: 11
        };
    
    
    
        render() {
            return (
                <div>
                    <div className='map' >
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            //key = "AIzaSyBTm4fsuiww8w2KKmoRkYfqe6UuZ5mdZoM"
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Map"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            );
        }
    
    };

    export default Map;
