import React from "react";
import { Card, Button } from "semantic-ui-react";
import styled from "styled-components";


const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 20em;
`;

const SportCard = ({ image, sport }) => (
  <div style={{ padding: "1.5em" }}>
    <Image src={image} />
  </div>
);

export default SportCard;
