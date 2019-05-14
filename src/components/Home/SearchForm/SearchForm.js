import React from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import { SingleDatePicker } from "react-dates";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  width: 100%;
  height: 80%;
  @media only screen and (min-width: 768px) {
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

const StyledForm = styled(Form)`
  @media only screen and (min-width: 768px) {
    margin: 1em auto;
  }
`;
const SelectOption = styled(Link)`
  &&& {
    padding: 8px 15px;
    align-self: center;
    border: 2px solid #483df6;
    background: #483df6;
    display: inline-block;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
    &:hover {
      background: #483df6;
      color: #fff;
    }
  }
`;

const StyledButton = styled(Button)`
  &&& {
    background: #483df6;
    font-weight: 600;
    color: #fff;
    font-size: 1.2em;
    border: 1.5px solid #483df6;
    border-radius: 0.5rem;
    width: 100%;
    align-self: flex-end;
    height: 50px;
    margin-right: 0;
    padding-top: 0.5em;
    &:hover {
      background: #483df6;
      color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
  &&& {
    background: #483df6;
    font-weight: 600;
    color: #fff;
    font-size: 1.2em;
    border: 1.5px solid #483df6;
    border-radius: 0.5rem;
    width: 100%;
    &:hover {
      background: #483df6;
      color: #fff;
    }
  }
`;

const countryOptions = [
  { key: "futbol", value: "futbol", text: "Futbol" },
  { key: "baloncesto", value: "baloncesto", text: "Baloncesto" },
  { key: "volleyball", value: "volleyball", text: "Volleyball" },
  { key: "tenis", value: "tenis", text: "Tenis" },
  { key: "golf", value: "golf", text: "Golf" },
  { key: "natacion", value: "natacion", text: "Natacion" }
];

const SearchForm = ({
  createdAt,
  onChange,
  onSubmit,
  onDateChange,
  onFocusChange,
  calendarFocused
}) => (
  <StyledForm onSubmit={onSubmit} size="large">
    <Form.Input
      fluid
      name="barrio"
      placeholder="Ciudad"
      onChange={onChange}
      style={{ margin: 0, height: "50px" }}
    />
    <Form.Field
      name="deporte"
      placeholder="Deporte"
      fluid
      onChange={onChange}
      control={Dropdown}
      options={countryOptions}
      search
      selection
      style={{ margin: 0, height: "50px" }}
    />
    <SingleDatePicker
      date={createdAt}
      onDateChange={onDateChange}
      focused={calendarFocused}
      onFocusChange={onFocusChange}
      numberOfMonths={1}
      isOutsideRange={() => false}
      placeholer="Fecha"
    />
    <ButtonContainer>
      <StyledLink
        style={{ width: "100%" }}
        type="submit"
        to={{
          pathname: `buscar`
        }}
      >
        <StyledButton>Buscar</StyledButton>
      </StyledLink>
    </ButtonContainer>
  </StyledForm>
);

export default SearchForm;
