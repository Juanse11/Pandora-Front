import React from "react";
import { Grid, Pagination, Icon } from "semantic-ui-react";
import CardItem from "../CardItem";
import styled from "styled-components";

const Column = styled(Grid.Column)`
  &&&&&&& {
    padding: 30px;
  }
`;

const CardItemList = ({ items }) => (
  <Grid style={{ marginTop: "3em" }} doubling centered relaxed>
    <Grid.Row style={{ justifyContent: "space-around" }}>
      {items.map(item => (
        <Column mobile={14} computer={7}>
          <CardItem {...item} />
        </Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default CardItemList;
