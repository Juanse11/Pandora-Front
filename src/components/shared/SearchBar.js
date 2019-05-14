import React from "react";
import { Search } from "semantic-ui-react";
import styled from "styled-components";

const StyledSearch = styled(Search)`
  &&& {
    height: 46px;
    border: none;
    border-radius: 3px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    min-width: 0;
    min-height: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
    & > .ui.icon.input {
      min-width: 0;
      min-height: 0;
      height: 100%;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      & > input {
        min-width: 0;
        min-height: 0;
        height: 100%;
        border-radius: 3px;
        border: 1px solid #ebebeb;
        font-size: 17px;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      & > i {
        min-width: 0;
        min-height: 0;
        font-size: 18px;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    & > .results.transition {
      min-width: 0;
      min-height: 0;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

const SearchBar = ({ isLoading, handleSearchChange, value, onKeyPress }) => (
  <StyledSearch
    onKeyPress={onKeyPress}
    loading={isLoading}
    onSearchChange={handleSearchChange}
    value={value}
    placeholder="Prueba «Barranquilla»"
  />
);

export default SearchBar;
