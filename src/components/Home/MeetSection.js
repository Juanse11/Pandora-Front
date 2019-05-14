import React from "react";
import {
  Grid,
  Segment,
  Container,
  Responsive
} from "semantic-ui-react";
import styled from "styled-components";
import cursos from "../../assets/about.svg";
import canchas from "../../assets/canchas.svg";
import court from "../../assets/court.svg";
import whistle from "../../assets/whistle.svg";
import MeetSectionItem from "./MeetSectionItem";

const description =
  "Review individual items on your TransUnion credit report, get personalized recommendations and discover potential areas of improvement.";

const ImageContainer = styled(Grid.Column)`
  &&&&& {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
    }
  }
`;

const Image = styled.img`
  &&& {
    object-fit: contain;
    object-position: 0 20%;
    align-self: center;
    margin-bottom: 20px;
    height: 476px;
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      object-position: 50% 50%;
      align-self: flex-start;
      margin-bottom: 20px;
      max-width: 60%;
    }
  }
`;

const StyledSegment = styled(Segment)`
  &&&& {
    padding: 11.5em 0;
    padding-bottom: 0;
    border: none;
    background: #fafafe;
    @media only screen and (min-width: 768px) {
      padding: 8em 0;
      padding-bottom: 100px;
    }
  }
`;

const AboutBlock = styled(Grid.Column)`
  &&& {
    padding-top: 1em;
    @media only screen and (min-width: 768px) {
      padding-top: 7em;
    }
  }
`;

const MeetSection = () => (
  <StyledSegment vertical>
    <Container>
      <Grid doubling centered>
        <Grid.Row>
          <AboutBlock
            computer={7}
            mobile={14}
            verticalAlign="middle"
            floated="left"
          >
            <MeetSectionItem
              image={court}
              description={description}
              title="Review items on your credit report securely online."
            />
          </AboutBlock>
          <ImageContainer floated="right" computer={7} mobile={14}>
            <Image style={{alignSelf: 'center'}} src={canchas} />
          </ImageContainer>
        </Grid.Row>
        <Responsive as={Grid.Row} minWidth={768}>
          <Grid.Column floated="left" computer={7}>
            <Image src={cursos} />
          </Grid.Column>
          <Grid.Column computer={7} verticalAlign="middle" floated="right">
            <MeetSectionItem
              image={whistle}
              description={description}
              title="Review items on your credit report securely online."
            />
          </Grid.Column>
        </Responsive>
        <Responsive as={Grid.Row} maxWidth={767}>
          <AboutBlock
            computer={7}
            mobile={14}
            verticalAlign="middle"
            floated="left"
          >
            <MeetSectionItem
              image={whistle}
              description={description}
              title="Review items on your credit report securely online."
            />
          </AboutBlock>
          <Grid.Column
            style={{ display: "flex", flexDirection: "column", paddingTop: 0 }}
            floated="left"
            mobile={14}
          >
            <Image src={cursos} />
          </Grid.Column>
        </Responsive>
      </Grid>
    </Container>
  </StyledSegment>
);

export default MeetSection;
