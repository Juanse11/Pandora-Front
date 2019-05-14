import React from "react";
import { Checkbox } from "semantic-ui-react";
import styled from "styled-components";
import FilterWrapper from "../FilterWrapperContainer";

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    height: 100%;
    width: 100%;
  }
`;

const Selection = styled.div`
  &&& {
    display: flex;
    min-height: 100%;
    margin: 0.5em 0;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  &&& {
    display: inline-block;
    margin-top: 0;
    font-size: 14px;
    align-self: center;
    &:checked {
      background: black;
    }
  }
`;
const NumberOfResults = styled.span`
  &&& {
    font-size: 10px;
    margin: 0 0.5em;
    color: #00000066;
    font-weight: 800;
  }
`;

const TypeFilter = ({ onChange, name, isActive, handleApplyChanges }) => (
  <FilterWrapper
    name={name}
    isActive={isActive}
    handleApplyChanges={handleApplyChanges}
  >
    <Box>
      <Selection>
        <StyledCheckbox
          label="Grama sintética"
          name="sintetico"
          value=""
          onChange={onChange}
        />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox
          label="Grama natural"
          name="natural"
          value=""
          onChange={onChange}
        />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox
          label="Arena"
          name="arena"
          value=""
          onChange={onChange}
        />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox
          label="Concreto"
          name="concreto"
          value=""
          onChange={onChange}
        />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
    </Box>
  </FilterWrapper>
);

export default TypeFilter;
