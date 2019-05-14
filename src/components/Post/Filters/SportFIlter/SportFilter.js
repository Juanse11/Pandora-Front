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

const SportFilter = ({ onChange, name, isActive, handleApplyChanges }) => (
  <FilterWrapper
    name={name}
    isActive={isActive}
    handleApplyChanges={handleApplyChanges}
  >
    <Box>
      <Selection>
        <StyledCheckbox label="Futbol" name="futbol" onChange={onChange} />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox
          label="Basquetbol"
          name="basquetbol"
          onChange={onChange}
        />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox label="Tenis" name="tenis" onChange={onChange} />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox label="Beisbol" name="beisbol" onChange={onChange} />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
      <Selection>
        <StyledCheckbox label="Boxeo" name="boxeo" onChange={onChange} />
        <NumberOfResults>&middot; 120+</NumberOfResults>
      </Selection>
    </Box>
  </FilterWrapper>
);

export default SportFilter;
