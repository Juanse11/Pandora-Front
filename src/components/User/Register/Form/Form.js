import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';

const StyledInput = styled(Input)`
  &&& {
    min-height: 46px;
    &&&&&&&&&&&&&&&& > input {
      &::placeholder {
        font-size: 16px;
        color: #4f4b65cc;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
    &&&&&&&&&&&&&&&& > i {
      font-size: 16px;
      color: #4f4b65cc;
    }
  }
`;

const StyledButton = styled(Button)`
  &&& {
    min-height: 48px;
    max-height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 13px 22px;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    background: #483df6;
    &:hover {
      background: #483df6;
      color: #fff;
    }
    &:focus {
      background: #483df6;
      color: #fff;
    }
    &:active {
      background: #483df6;
      color: #fff;
    }
  }
`;
const RegisterForm = ({ onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Field>
      <StyledInput required onChange={onChange} name="mail" icon="mail" placeholder="Correo electrónico" />
    </Form.Field>
    <Form.Field>
      <StyledInput required onChange={onChange} name="firstName" icon="user" placeholder="Nombre" />
    </Form.Field>
    <Form.Field>
      <StyledInput required onChange={onChange} name="lastName" icon="user" placeholder="Apellido" />
    </Form.Field>
    <Form.Field>
      <StyledInput required onChange={onChange} name="password"  type="password" icon="lock" placeholder="Contraseña" />
    </Form.Field>
    <Form.Field>
      <Checkbox style={{fontSize: '16px'}} onChange={onChange} name="checkbox" label="Acepto los términos y condiciones" />
    </Form.Field>
    <StyledButton type="submit">Registrarse</StyledButton>
  </Form>
);

export default RegisterForm