import React from "react";
import styled from "styled-components";
import { Container, Grid, Divider } from "semantic-ui-react";

import Header from "./Header";
import PictureSlider from "./PictureSlider";
import CardDetails from "./CardDetails";
import Reviews from "./Reviews/Reviews";
import Availability from "./Availability/Container";
import RelatedPosts from "./RelatedPosts/RelatedPosts";
import Policies from "./Policies";

const StyledContainer = styled(Container)`
  &&&&&&&&&&& {
    max-width: 1080px !important;
    padding: 0 18px;
    padding-bottom: 96px;
    margin-top: 32px;
  }
`;

const Content = ({ post }) => (
  <React.Fragment>
    {post.coordinates.length > 0 && (
      <React.Fragment>
        <PictureSlider pictures={post.pictures} />
        <StyledContainer>
          <Header
            title={post.title}
            sports={post.sports}
            rating={post.rating}
          />
          <Grid style={{ margin: 0, marginTop: "24px" }}>
            <Grid.Column mobile={16} style={{ padding: 0 }} computer={10}>
              <Divider style={{ margin: 0, marginBottom: "24px" }} />
              <Availability
                post={post}
                postID={post.id}
                sellerID={post.sellerID}
                price={post.price}
              />
              <Reviews rating={post.rating} />
              <Policies />
            </Grid.Column>
            <Grid.Column
              computer={6}
              mobile={16}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: 0
              }}
            >
              <CardDetails
                coordinates={post.coordinates}
                services={post.services}
                address={post.address}
                sports={post.sports}
              />
            </Grid.Column>
          </Grid>
          <Divider style={{ margin: "24px 0" }} />
          <RelatedPosts />
        </StyledContainer>
      </React.Fragment>
    )}
  </React.Fragment>
);

export default Content;
