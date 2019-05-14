import React from "react";
import { Grid } from "semantic-ui-react";
import Post from "./PostItem";

const PostList = ({
  items,
  isLoading,
  handleGoToPostPage,
  handleSelectedPark
}) => (
  <Grid doubling padded="vertically" style={{ margin: 0 }}>
    <Grid.Row
      columns={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px"
      }}
    >
      {items.map((item, index) => (
        <Grid.Column
          key={index}
          mobile={16}
          tablet={16}
          computer={16}
          style={{ padding: "10px" }}
        >
          <Post
            handleGoToPostPage={handleGoToPostPage}
            handleSelectedPark={handleSelectedPark}
            isLoading={isLoading}
            {...item}
          />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default PostList;
