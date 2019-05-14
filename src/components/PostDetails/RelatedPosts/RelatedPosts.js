import React from "react";
import styled from "styled-components";
import { Grid, GridColumn } from "semantic-ui-react";

import Item from "./Item";
import Subtitle from "../Subtitle";

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const ShowAll = styled.a`
  &&& {
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.28em;
    margin: 24px 0;
    color: #3a91aa;
    &:hover {
        text-decoration: underline;
        text-decoration-color: #3a91aa;
      }
  }
`;

const RelatedPosts = () => (
  <React.Fragment>
    <Subtitle>
      <Title>Más establecimientos que te pueden gustar</Title>
    </Subtitle>
    <Grid
      style={{ margin: 0, display: "flex", justifyContent: "space-between" }}
    >
      <GridColumn style={{ padding: 0 }} computer={5}>
        <Item
          title="Old Trafford"
          price={45000}
          rating={4.7}
          sport="Tenis"
          image="https://wallpapercave.com/wp/V0ANDHu.jpg"
          isLoading={false}
          id={2}
        />
      </GridColumn>
      <GridColumn style={{ padding: 0 }} computer={5}>
        <Item
          title="Old Trafford"
          price={45000}
          rating={4.7}
          sport="Tenis"
          image="https://wallpapercave.com/wp/V0ANDHu.jpg"
          isLoading={false}
          id={2}
        />
      </GridColumn>
      <GridColumn style={{ padding: 0 }} computer={5}>
        <Item
          title="Old Trafford"
          price={45000}
          rating={4.7}
          sport="Tenis"
          image="https://wallpapercave.com/wp/V0ANDHu.jpg"
          isLoading={false}
          id={2}
        />
      </GridColumn>
    </Grid>
    <ShowAll>Mostrar todo</ShowAll>
  </React.Fragment>
);

export default RelatedPosts;
