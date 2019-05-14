import React from "react";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";
import SportFilter from "../Filters/SportFIlter/Container";
import DateFilter from "../Filters/DateFilter/Container";
import RatingFilter from "../Filters/RatingFilter/Container";
import PriceFilter from "../Filters/PriceFilter/Container";
// import SortFilter from '../Filters/SortFilter/Container'
import TypeFilter from '../Filters/TypeFilter/Container'

const StyledSegment = styled(Segment)`
  &&& {
    position: sticky;
    z-index: 9;
    top: 80px;
    background: #fff;
    margin: 0;
    border-radius: 0;
    border-right: 0;
    border: none;
    border-bottom: 1px solid rgb(228, 228, 228);
    box-shadow: none;
    padding: 0.5em 24px;
    @media only screen and (max-width: 767px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FiltersBar = props => (
  <StyledSegment>
    <DateFilter />
    <SportFilter />
    <RatingFilter />
    <PriceFilter />
    <TypeFilter />
  </StyledSegment>
);

export default FiltersBar;
