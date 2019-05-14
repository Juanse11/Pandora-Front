import React from "react";
import styled from "styled-components";
import { Icon, Divider } from "semantic-ui-react";

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
`;

const Item = styled.div`
  &&& {
    display: flex;
    align-items: center;
    padding: 8px 0;
  }
`;

const ItemText = styled.p`
  &&& {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28em;
    color: #4f4b65;
    margin: 0;
  }
`;

const ItemAction = styled.a`
  &&& {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28em;
    margin-left: auto;
    color: #483df6;
    &:hover {
        text-decoration: underline;
        text-decoration-color: #483df6} ;
      }
  }
`;

const ItemSchedule = styled.p`
  &&& {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28em;
    margin: 0;
    margin-left: auto;
    color: #4f4b65;
  }
`;

const StyledIcon = styled(Icon)`
  &&& {
    font-size: 16px;
    margin-right: 8px;
    color: #4f4b65;
    align-self: flex-start;
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

const LocationInformation = ({ address, services, sports }) => (
  <Box>
    <Item>
      <StyledIcon name="map marker alternate" />
      <ItemText> {address} </ItemText>
      <ItemAction>Como llegar</ItemAction>
    </Item>
    <Item>
      <StyledIcon name="phone" />
      <ItemText>(304) 545-4488</ItemText>
      <ItemAction>Llamar</ItemAction>
    </Item>
    <Item>
      <StyledIcon name="clock" />
      <ItemText>Lunes - Domingo</ItemText>
      <ItemText style={{ marginLeft: "auto" }}>6:00 AM - 11:00 PM</ItemText>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <StyledIcon style={{ alignSelf: "center" }} name="soccer" />
      <ItemText>Deportes</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>
        {sports.map((sport, index) =>
          index === sports.length - 1 ? (
            <span key={sport}>{sport}</span>
          ) : (
            <span key={sport}>{sport} &middot;</span>
          )
        )}
      </ItemText>
    </Item>
    <Item>
      <StyledIcon name="shower" />
      <ItemText>Regaderas</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>Sí</ItemText>
    </Item>
    <Item>
      <StyledIcon name="food" />
      <ItemText>Cafetería</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>Sí</ItemText>
    </Item>
    <Item>
      <StyledIcon name="car" />
      <ItemText>Parqueadero</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>Sí</ItemText>
    </Item>
  </Box>
);

export default LocationInformation;
