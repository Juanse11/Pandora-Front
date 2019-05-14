import React from "react";
import styled from "styled-components";
import { Rating, CommentGroup, Divider } from "semantic-ui-react";
import Subtitle from "../Subtitle";
import ReviewMessage from './ReviewMessage'

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const StyledRating = styled(Rating)`
  &&& {
    margin-left: 16px;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Reviews = () => (
  <Box>
    <Subtitle>
      <Title>154 evaluaciones</Title>
      <StyledRating icon="star" disabled defaultRating={5} maxRating={5} />
    </Subtitle>
    <CommentGroup style={{margin: 0}} size="large">
      <ReviewMessage />
      <ReviewMessage />
      <ReviewMessage />
      <ReviewMessage />
      <ReviewMessage />
      <ReviewMessage />
      <ReviewMessage />
    </CommentGroup>
    <Divider style={{ margin: "24px 0" }} />
  </Box>
);

export default Reviews;
