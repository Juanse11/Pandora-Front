import React from "react";
import styled from "styled-components";
import PostList from "../Post/PostList";
import CardList from "../Post/CardList";
import ResultsMap from "./Map/SearchResultsMap";
import {
  Container,
  Dimmer,
  Segment,
  Header,
  Icon,
  Dropdown,
  Grid
} from "semantic-ui-react";
import { connect } from "react-redux";

const StyledSegment = styled(Segment)`
  &&&& {
    background: #fff;
    padding: 0;
    padding-top: 2em;
    margin: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    width: 100% @media only screen and (min-width: 768px) {

    }
  }
`;
const StyledDimmer = styled(Dimmer)`
  &&& {
    background-color: #fafafed9;
  }
`;

const Paragraph = styled(Header)`
  &&& {
    font-size: 15px;
    color: #4f4b65;
    font-weight: 800;
    margin: 0;
    align-self: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const Title = styled(Header)`
  &&& {
    flex-basis: 100%;
    font-size: 25px;
    color: #4f4b65;
    font-weight: 800;
    margin: 0;
    align-self: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const SearchResultsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  justify-content: space-between;
`;

const SearchBox = styled(Container)`
  &&&&& {
    padding: 14px;
  }
`;
const ViewOption = styled(Icon)`
  &&&&&&&& {
    color: ${props => (props.active ? "#3a91aa" : "#4f4b65")};
    cursor: pointer;
    font-size: 15px;
    margin-right: 0.5em;
    transition: color 0.2s, padding-bottom 0.2s;
    &:hover {
      color: #3a91aa;
    }
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;
const sortOptions = [
  {
    key: "Precio",
    text: "Precio",
    value: "Precio",
    icon: {
      name: "money bill alternate outline"
    }
  },
  {
    key: "Calificacion",
    text: "Calificacion",
    value: "Calificacion",
    icon: {
      name: "star outline"
    }
  }
];

const StyledDropdown = styled(Dropdown)`
  &&&&&&& {
    min-width: 150px;
    min-height: 0px;
    max-width: 150px;
    max-height: 40px;
    margin: 0 0.2em;
    padding: 0;
    padding: 10px 15px;
    padding-right: 40px;
    & > .text {
      font-weight: 600;
    }
  }
`;

// «Barranquilla»
const SearchResults = ({
  isDimmed,
  isBlockLayout,
  isListLayout,
  handleBlockSelection,
  handleListSelection,
  items,
  isLoading,
  selectedPark,
  handleSelectedPark,
  handleGoToPostPage
}) => (
  <Grid style={{ margin: 0 }}>
    <Grid.Column computer={10} style={{ padding: 0 }}>
      <StyledSegment>
        <SearchBox fluid>
          <SearchResultsHeader>
            <Title>Resultados en «Barranquilla»</Title>
            <Paragraph>300 establecimientos</Paragraph>

            <Paragraph style={{ display: "flex", maxWidth: "100%" }}>
              <Paragraph style={{ display: "flex" }}>
                <ViewOption
                  onClick={handleBlockSelection}
                  active={isBlockLayout ? 1 : 0}
                  name="block layout"
                />
                <ViewOption
                  onClick={handleListSelection}
                  active={isListLayout ? 1 : 0}
                  name="list layout"
                />
              </Paragraph>

              <StyledDropdown
                fluid
                placeholder="Ordenar por"
                selection
                options={sortOptions}
              />
              <ViewOption
                style={{
                  alignSelf: "center",
                  marginLeft: "0.5em",
                  marginRight: 0
                }}
                name="sort content ascending"
              />
            </Paragraph>
          </SearchResultsHeader>

          <StyledDimmer active={isDimmed} />
          {isListLayout && (
            <PostList
              handleGoToPostPage={handleGoToPostPage}
              handleSelectedPark={handleSelectedPark}
              items={items}
              isLoading={isLoading}
            />
          )}
          {isBlockLayout && (
            <CardList
              handleGoToPostPage={handleGoToPostPage}
              handleSelectedPark={handleSelectedPark}
              items={items}
              isLoading={isLoading}
            />
          )}
        </SearchBox>
      </StyledSegment>
    </Grid.Column>

    <Grid.Column style={{ padding: 0 }} computer={6}>
      {!isLoading && <ResultsMap items={items} selectedPark={selectedPark} />}
    </Grid.Column>
  </Grid>
);

const mapStateToProps = ({ modal: { isDimmed } }) => {
  return {
    isDimmed
  };
};

export default connect(mapStateToProps)(SearchResults);
