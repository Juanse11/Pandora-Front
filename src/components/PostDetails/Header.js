import React from "react";
import styled from "styled-components";
import { Rating, Divider, Grid } from "semantic-ui-react";

const HeaderBox = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Sport = styled.span`
  &&& {
    font-size: 12px;
    font-weight: 800;
    color: #4f4b65;
    margin: 0;
  }
`;
const Title = styled.h1`
  &&& {
    white-space: normal;
    font-size: 32px;
    font-weight: 800;
    color: #4f4b65;
    margin: 0;
    padding: 8px 0;
    line-height: 1.1em;
  }
`;

const TitleBox = styled.div`
  &&& {
    max-width: 100%;
  }
`;

const Header = ({ title, sports }) => (
  <Grid style={{ margin: 0, marginTop: "24px" }}>
    <Grid.Column computer={10} style={{ padding: 0 }}>
      <HeaderBox>
        <Sport>
          {sports.map((sport, index) =>
            index === sports.length - 1 ? (
              <span key={sport}>{sport.toUpperCase()}</span>
            ) : (
              <span key={sport}>{sport.toUpperCase()} &middot; </span>
            )
          )}
        </Sport>
        <TitleBox>
          <Title> {title} </Title>
        </TitleBox>
      </HeaderBox>
    </Grid.Column>
  </Grid>
);

export default Header;
