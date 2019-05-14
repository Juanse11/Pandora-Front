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
    background: #3a91aa;
    &:hover {
      background: #3a91aa;
      color: #fff;
    }
    &:focus {
      background: #3a91aa;
      color: #fff;
    }
    &:active {
      background: #3a91aa;
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
      <StyledInput required onChange={onChange} name="password"  type="password" icon="lock" placeholder="Contraseña" />
    </Form.Field>
    <Form.Field>
      <Checkbox style={{fontSize: '16px'}} onChange={onChange} name="checkbox" label="Recordarme" />
    </Form.Field>
    <StyledButton type="submit">Iniciar sesión</StyledButton>
  </Form>
);

export default RegisterForm