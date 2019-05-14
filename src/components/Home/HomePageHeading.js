import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import SearchForm from "./SearchForm/SearchFormContainer";

const StyledContainer = styled(Container)`
  &&& {
    height: 100%;
    min-height: 440px;
    display: flex;
    padding-top: 4em;
    @media only screen and (min-width: 768px) {
      padding-top: 12em;
      display: block;
    }
  }
`;

const Subtitle = styled.p`
  &&& {
    color: #fff;
    font-size: 2em;
    margin-bottom: 0.5em;
    @media only screen and (min-width: 768px) {
      font-size: 40px;
    }
  }
`;

const Title = styled(Header)`
  &&& {
    color: #fff;
    font-size: 2.2em;
    font-weight: 700;
    margin: 0;
    @media only screen and (min-width: 768px) {
      font-size: 45px;
    }
  }
`;
const FormTitle = styled(Header)`
  &&& {
    color: #4f4b65;
    font-size: 2em;
    font-weight: 300;
    @media only screen and (min-width: 768px) {
      color: #fff;
      font-size: 2em;
    }
  }
`;

const StyledColumn = styled(Grid.Column)`
  &&& {
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.47);
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.47);
    background-color: #fafafe;
    padding: 1.2em;
    @media only screen and (min-width: 768px) {
      -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.47);
      -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.47);
      box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.47);
      background-color: #00000040;
      padding: 1.2em;
    }
  }
`;

const HomePageHeading = () => (
  <StyledContainer>
    <Grid stretched>
      <Grid.Row>
        <Grid.Column
          computer={8}
          mobile={16}
          textAlign="left"
          verticalAlign="top"
        >
          <Title as="h1">Pandora.</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Subtitle>
        </Grid.Column>
        <StyledColumn
          floated="right"
          mobile={16}
          computer={6}
          verticalAlign="bottom"
        >
          <FormTitle
            className="searchForm__header"
            as="h1"
            textAlign="left"
          >
            Encuentra lugares para entrenar cerca de ti.
          </FormTitle>
          <SearchForm />
        </StyledColumn>
      </Grid.Row>
    </Grid>
  </StyledContainer>
);

export default HomePageHeading;
