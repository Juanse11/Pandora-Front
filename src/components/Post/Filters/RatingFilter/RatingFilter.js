import React from "react";
import { Checkbox, Rating } from "semantic-ui-react";
import styled from "styled-components";
import FilterWrapper from "../FilterWrapperContainer";

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
const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 375px;
    padding: 24px;
  }
`;

const StyledRating = styled(Rating)`
  &&&&&&& {
    margin: 0 0.5em;
    align-self: center;
    font-size: 14px;
  }
`;
const RatingDescription = styled.p`
  &&& {
    font-weight: 400;
    display: inline-block;
    font-size: 14px;
    color: #4f4b65;
  }
`;

const RatingFilter = ({
  onChange,
  value,
  name,
  isActive,
  handleApplyChanges
}) => (
  <FilterWrapper name={name} isActive={isActive} handleApplyChanges={handleApplyChanges}>
    <Box>
      <Selection>
        <StyledCheckbox
          name="4"
          onChange={onChange}
          value={4}
          checked={value === 4}
        />
        <StyledRating icon="star" disabled rating={4} maxRating={5} />
        <RatingDescription>
          4 estrellas y más
          <NumberOfResults>&middot; 120+</NumberOfResults>
        </RatingDescription>
      </Selection>
      <Selection>
        <StyledCheckbox
          name="3"
          onChange={onChange}
          value={3}
          checked={value === 3}
        />
        <StyledRating icon="star" disabled rating={3} maxRating={5} />
        <RatingDescription>
          3 estrellas y más
          <NumberOfResults>&middot; 120+</NumberOfResults>
        </RatingDescription>
      </Selection>
      <Selection>
        <StyledCheckbox
          name="2"
          onChange={onChange}
          value={2}
          checked={value === 2}
        />
        <StyledRating icon="star" disabled rating={2} maxRating={5} />
        <RatingDescription>
          2 estrellas y más
          <NumberOfResults>&middot; 120+</NumberOfResults>
        </RatingDescription>
      </Selection>
      <Selection>
        <StyledCheckbox
          name="1"
          onChange={onChange}
          value={1}
          checked={value === 1}
        />
        <StyledRating icon="star" disabled rating={1} maxRating={5} />
        <RatingDescription>
          1 estrella y más
          <NumberOfResults>&middot; 120+</NumberOfResults>
        </RatingDescription>
      </Selection>
    </Box>
  </FilterWrapper>
);

export default RatingFilter;
