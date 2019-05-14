import React from "react";
import {
  Grid,
  Header,
  Segment,
  Container,
  Responsive
} from "semantic-ui-react";
import CardSlider from "./CardSlider";
import styled from "styled-components";
import SportsCard from "./SportsSectionItem";
import baseball from "../../assets/baseball.svg";
import tenis from "../../assets/tenis.svg";
import basketball from "../../assets/basketball.svg";
import futbol from "../../assets/futbol.svg";
import boxing from "../../assets/boxing.svg";
import yoga from "../../assets/yoga.svg";
import background from '../../assets/sportssegment.svg'

const StyledSegment = styled(Segment)`
  &&& {
    padding: 8em 0;
    margin: 0;
    border: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${background});
    background-color: #fafafe;
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
  display: inline-block;
  color: #483df6c9;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.8em;
  font-weight: 600;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 0.9em;
    margin: 0;
  }
`;

const SportsSection = () => (
  <StyledSegment>
    <Container style={{display: 'flex', flexDirection: 'column'}}>
      <Subtitle>EXPLORA DEPORTES</Subtitle>
      <Title>Deportes más populares</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu elit
        leo.
      </Description>
      <Responsive minWidth={769}>
        <Grid doubling centered relaxed>
          <Grid.Row centered>
            <Grid.Column  computer={5}>
              <SportsCard image={futbol} sport="Fútbol" />
            </Grid.Column>
            <Grid.Column  computer={5}>
              <SportsCard image={basketball} sport="Baloncesto" />
            </Grid.Column>
            <Grid.Column  computer={5}>
              <SportsCard image={baseball} sport="Beisbol" />
            </Grid.Column>
            <Grid.Column  computer={5}>
              <SportsCard image={boxing} sport="Boxeo" />
            </Grid.Column>
            <Grid.Column  computer={5}>
              <SportsCard image={tenis} sport="Tenis" />
            </Grid.Column>
            <Grid.Column  computer={5}>
              <SportsCard image={yoga} sport="Yoga" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <Responsive maxWidth={768}>
        <CardSlider image={futbol} sport="Fútbol" />
      </Responsive>
    </Container>
  </StyledSegment>
);

export default SportsSection;
