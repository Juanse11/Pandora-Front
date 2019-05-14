import React from "react";
import NavBar from "../shared/NavBar";
import FiltersBar from "./Filters/FiltersBar";

const SearchHeader = props => (
  <div>
    <NavBar>
      <FiltersBar />
      {props.children}
    </NavBar>
  </div>
);

export default SearchHeader;
