import React from "react";
import { Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import FilterWrapper from "../FilterWrapperContainer";

const Box = styled.div`
  &&& {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
  }
`;

const MiddleLabel = styled.p`
  &&& {
    align-self: center;
    font-size: 15px;
    color: #4f4b65;
    margin: 0;
  }
`;

const StyledInput = styled(Input)`
  &&& {
    display: inline-block;
    margin: 1em 0;
    width: 100%;
  }
`;

const PriceFilter = ({
  onChange,
  handleApplyChanges,
  name,
  isActive,
}) => (
  <FilterWrapper
    name={name}
    handleApplyChanges={handleApplyChanges}
    isActive={isActive}
  >
    <Box>
      <StyledInput
        onChange={onChange}
        fluid
        labelPosition="right"
        type="text"
        placeholder="Minimo"
        name="minimum"
      >
        <Label
          style={{ background: "#3a91aa", color: "#fff", fontSize: "15px" }}
          basic
        >
          $
        </Label>
        <input type="number" style={{ fontSize: "15px" }} />
        <Label style={{ color: "#4f4b65", fontSize: "15px" }} basic>
          COP
        </Label>
      </StyledInput>
      <MiddleLabel>hasta</MiddleLabel>
      <StyledInput
        onChange={onChange}
        fluid
        labelPosition="right"
        type="text"
        placeholder="Maximo"
        name="maximum"
      >
        <Label
          style={{ background: "#3a91aa", color: "#fff", fontSize: "15px" }}
          basic
        >
          $
        </Label>
        <input type="number" style={{ fontSize: "15px" }} />
        <Label style={{ color: "#4f4b65", fontSize: "15px" }} basic>
          COP
        </Label>
      </StyledInput>
    </Box>
  </FilterWrapper>
);

export default PriceFilter;
