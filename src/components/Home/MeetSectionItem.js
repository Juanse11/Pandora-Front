import React from "react";
import { Header, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Box = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 2em;
  }
`;

const Title = styled(Header)`
  &&& {
    font-size: 1.9em;
    font-weight: 600;
    text-align: center;
    color: #4f4b65;
    line-height: 36px;
    @media only screen and (min-width: 768px) {
      font-size: 1.9em;
      text-align: left;
      font-weight: 600;
    }
  }
`;

const Subtitle = styled.p`
  &&& {
    font-size: 1.2em;
    color: #4f4b65;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 16px;
    @media only screen and (min-width: 768px) {
      font-size: 1.2em;
      text-align: left;
    }
  }
`;

const Action = styled.a`
  position: relative;
  text-decoration: none;
  font-size: 1.2em;
  color: #483df6;
  line-height: 1.6em;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 700;
  @media only screen and (min-width: 768px) {
    font-size: 1.2em;
    text-align: left;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    color: #483df6c9;
    background-color: #483df6c9;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }

  &:hover {
    color: #483df6c9;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

const Image = styled.img`
  &&& {
    align-self: center;
    margin-bottom: 45px;
    height: 50px;
    width: 50px;
    @media only screen and (min-width: 768px) {
      align-self: flex-start;
      margin-bottom: 20px;
      height: 70px;
      width: 70px;
    }
  }
`;

const MeetSectionItem = ({ description, image, title }) => (
  <Box>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column"
      }}
    >
      <Image
        src={image}
        alt="triangle with all three sides equal"
      />
      <Title style={{ margin: 0, marginBottom: "8px" }}>{title}</Title>
    </div>

    <Subtitle>{description}</Subtitle>
    <Action href="#action">
      Review your credit report
      <Icon
        style={{ textDecoration: "none" }}
        name="long arrow alternate right"
      />
    </Action>
  </Box>
);

export default MeetSectionItem;
