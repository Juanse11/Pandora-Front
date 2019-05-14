import React from "react";
import { Grid, Pagination, Icon } from "semantic-ui-react";
import CardItem from "./CardItem";
import styled from "styled-components";

const Column = styled(Grid.Column)`
  &&&&&&& {
    @media only screen and (min-width: 991px) {
      padding: 10px;
      width: 33% !important;
    }
  }
`;

const CardItemList = ({
  items,
  isLoading,
  handleSelectedPark,
  handleGoToPostPage
}) => (
  <Grid style={{ margin: 0 }} doubling centered relaxed>
    <Grid.Row
      columns={4}
      style={{ justifyContent: "space-around", padding: "10px 0" }}
    >
      {items.map((item, index) => (
        <Column key={index} mobile={16} tablet={8} computer={5}>
          <CardItem
            {...item}
            handleGoToPostPage={handleGoToPostPage}
            handleSelectedPark={handleSelectedPark}
            isLoading={isLoading}
          />
        </Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default CardItemList;
