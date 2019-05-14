import React from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import Filter from "../FilterWrapper";


const FiltersList = ({ filters }) => (
  <div>
    {filters.map(({ name, component }) => (
      <Filter name={name}>{component}</Filter>
    ))}
  </div>
);

export default FiltersList;
