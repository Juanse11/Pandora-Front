import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { Icon } from "semantic-ui-react";

import styled from "styled-components";

import pin from "../../assets/maps-and-flags.svg";

const StyledIcon = styled(Icon)`
  &&& {
  }
`;

const TOKEN =
  "pk.eyJ1IjoianVhbnNldiIsImEiOiJjam03MjJoeDUwNmc1M3VxeG81YXkyZ3VrIn0.SXMSsc_6gpJuge-YBOUy3Q"; // Set your mapbox token here

const StyledMarker = styled(Marker)`
  &&& {
    z-index: ${props => (props.isActive ? "9" : "0")};
  }
`;

const PinPoint = styled(Icon)`
  &&&&&&&& {
    color: #483df6;
    cursor: pointer;
    font-size: 15px;
    margin-right: 0.5em;
    z-index: 9;
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

export default function PostMap({ coordinates }) {
  const [viewport, setViewport] = useState({
    latitude: Number(coordinates[0]),
    longitude: Number(coordinates[1]),
    zoom: 14
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/juansev/cjv90yxxp3f911fpfqjwbfduu"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Marker
          offsetLeft={-25}
          offsetTop={-50}
          latitude={Number(coordinates[0])}
          longitude={Number(coordinates[1])}
        >
          <div style={{ width: "50px", height: "50px" }}>
            <img src={pin} width="50" height="50" alt="map" />
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
