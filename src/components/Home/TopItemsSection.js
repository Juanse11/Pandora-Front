import React from "react";
import { Header, Segment, Container, Button } from "semantic-ui-react";
import CardList from "../shared/CardItemList/CardItemListContainer";
import styled from "styled-components";

const StyledSegment = styled(Segment)`
  &&& {
    padding: 8em 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fafafe;
    margin: 0;
    border: none;
    border-radius: 0;
  }
`;

const Title = styled(Header)`
  &&& {
    margin: 0;
    font-size: 1.9em;
    font-weight: 600;
    text-align: center;
    color: #4f4b65;
    line-height: 36px;
    @media only screen and (min-width: 768px) {
      font-size: 1.9em;
      text-align: center;
      font-weight: 600;
    }
  }
`;

const Description = styled.p`
  &&& {
    font-size: 1.2em;
    color: #4f4b65;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (min-width: 768px) {
      font-size: 1.2em;
      text-align: center;
    }
  }
`;

const Subtitle = styled.p`
  color: #483df6c9;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.8em;
  text-align: center;
  @media only screen and (min-width: 768px) {
    text-align: center;
    font-size: 0.9em;
    margin: 0;
  }
`;

const CardButton = styled(Button)`
  &&& {
    &:hover {
      color: #483df6;
      background: #483df642;
    }
    background: none;
    color: #483df6;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 0.9em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    @media only screen and (min-width: 768px) {
      margin-right: 6em;
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
    @media only screen and (max-width: 767px) {
      background: none;
      width: 100%;
      margin-right: 2em;
      margin-left: 1.8em;
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
  }
`;

const ShowAll = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: flex-end;
`;

const TopItemsSection = props => (
  <StyledSegment>
    <Container>
      <Subtitle>DESCUBRE INSTALACIONES</Subtitle>
      <Title>Instalaciones con mayor valoración</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu elit
        leo.
      </Description>
      <CardList />
      <ShowAll>
        <CardButton size="medium">VER TODOS LOS ESTABLECIMIENTOS</CardButton>
      </ShowAll>
    </Container>
  </StyledSegment>
);

export default TopItemsSection;
