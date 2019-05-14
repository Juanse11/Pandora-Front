import React from "react";
import styled from "styled-components";
import LocationInformation from "./LocationInformation";
import PostMap from "./Map";

const Box = styled.div`
  &&& {
    margin: 0;
    line-height: 1.43;
    width: 350px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 236px;
`;

const MapBox = styled.div`
  &&& {
    height: 236px;
    display: flex;
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardDetails = ({ coordinates, services, address, sports }) => (
  <Box>
    <MapBox>
      <PostMap coordinates={coordinates} />
    </MapBox>
    <LocationInformation sports={sports} services={services} address={address} />
  </Box>
);

export default CardDetails;
