// import * as React from 'react';
// import { useState } from 'react';
// import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// export class Map extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             width: 400,
//             height: 400,
//             latitude: 37.7577,
//             longitude: -122.4376,
//             zoom: 8
//         }
//     }

//     render() {
//         return (
//             <ReactMapGL
//                 {...viewport}
//                 onViewportChange={nextViewport => setViewport(nextViewport)}
//             />);
//     }
// }
// export default Map;


import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import HamburgerMenu from './HamburgerMenu';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWdtMDBuIiwiYSI6ImNrbXo2bDlqNDA4dHcyeXQzaWlqdHFhcGEifQ.6klwMB5JO7HQnjpFTOmjnw";

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 1000 };

            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides
            });
        },
        [handleViewportChange]
    );

    return (
        <div>
            <HamburgerMenu />
            <div style={{ height: "100vh", marginTop: '1.79em' }}>
                <MapGL
                    ref={mapRef}
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    <Geocoder
                        mapRef={mapRef}
                        onViewportChange={handleGeocoderViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        position="top-left"
                    />
                </MapGL>
            </div>
        </div>
    );
};

export default Map;

render(<Map />, document.getElementById("root"));
