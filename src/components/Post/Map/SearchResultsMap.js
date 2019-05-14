import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import PinPoint from "./MapLabel";
import styled from "styled-components";

const TOKEN =
  "pk.eyJ1IjoianVhbnNldiIsImEiOiJjam03MjJoeDUwNmc1M3VxeG81YXkyZ3VrIn0.SXMSsc_6gpJuge-YBOUy3Q"; // Set your mapbox token here

const StyledMarker = styled(Marker)`
  &&& {
    z-index: ${props => (props.isActive ? "9" : "0")};
  }
`;

export default function ResultsMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 10.96854,
    longitude: -74.78132,
    zoom: 11
  });

  return (
    <div
      style={{
        position: "fixed",
        width: "inherit",
        height: "calc(100vh - 127px)"
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
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            zIndex: 99
          }}
        >
          <NavigationControl
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          />
        </div>
        {props.items.map((post, index) => (
          <StyledMarker
            key={`marker-${index}`}
            offsetLeft={-50}
            offsetTop={-15}
            latitude={Number(post.coordinates[0])}
            longitude={Number(post.coordinates[1])}
            isActive={post.id === props.selectedPark.id}
          >
            <PinPoint
              price={post.price}
              isActive={post.id === props.selectedPark.id}
            />
          </StyledMarker>
        ))}
      </ReactMapGL>
    </div>
  );
}
