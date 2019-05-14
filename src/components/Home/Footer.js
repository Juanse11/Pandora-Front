import React from "react";
import { Container, Header, Segment, Button } from "semantic-ui-react";
import background from "../../assets/footer2.svg";
import styled from "styled-components";

const StyledSegment = styled(Segment)`
  &&& {
    padding: 8em 0;
    padding-bottom: 4em;
    min-height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${background});
    background-color: #fafafe;
    margin: 0;
    border: none;
    border-radius: 0;
  }
`;

const Title = styled(Header)`
  &&& {
    color: #fff;
    font-size: 2.6em;
    font-weight: 700;
    align-self: center;
    @media only screen and (min-width: 768px) {
      font-size: 2.2em;
      text-align: center;
    }
  }
`;
const CardButton = styled(Button)`
  &&& {
    &:hover {
      color: #483df6;
      background: #fff;
    }
    background: #fff;
    color: #483df6;
    font-weight: 600;
    font-size: 1em;
    align-self: center;
    padding-left: 0.5em;
    padding-right: 0.5em;
    @media only screen and (min-width: 768px) {
      padding: 1.5em 2em;
      margin-top: 1em;
    }
  }
`;

const Box = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 30%
  @media only screen and (min-width: 768px){
    padding-top: 10%

  }
`;

const Footer = () => (
  <StyledSegment>
    <Container
      style={{
        display: "flex",
        height: "400px",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Box>
        <Title>Prueba Pandora. Es gratis.</Title>
        <CardButton size="medium">EMPEZAR AHORA </CardButton>
      </Box>
      <p
        style={{
          color: "#ffffff66",
          alignSelf: "center",
          margin: "auto",
          marginBottom: 0
        }}
      >
        © 2019 Team Pandora{" "}
      </p>
    </Container>
  </StyledSegment>
);

export default Footer;
