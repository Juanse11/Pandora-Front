import React from "react";
import styled from "styled-components";
import { Header, Container, Divider } from "semantic-ui-react";
import { FacebookButton, GmailButton } from "../SocialNetButtons";
import RegisterForm from "./Form/Container";
import facebook from "../../../assets/facebook.svg";
import google from "../../../assets/google.svg";
import Modal from "../Modal/Container";

const Title = styled(Header)`
  &&&& {
    text-align: left;
    font-size: 24px;
    font-weight: 800;
    border-bottom: none;
    margin: 24px 0;
  }
`;

const ButtonsBox = styled(Container)`
  &&&& {
    width: 100%;
  }
`;

const StyledDivider = styled(Divider)`
  &&& {
    color: #767676;  
    text-transform: lowercase;
    margin: 22px 0;
  }
`;

const Image = styled.img`
  &&& {
    align-self: self-start;
    height: 18px;
    width: 18px;
    margin-right: 12px;
  }
`;

const Footer = styled.p`
  &&& {
    font-size: 16px;
    color: #4f4b65;
    font-weight: 400;
  }
`;
const RegisterAction = styled.a`
  font-weight: 700;
  color: #483df6;
  margin: 0 8px;
  cursor: pointer;
  &:hover {
    color: #483df6;
    text-decoration: underline;
    text-decoration-color: #483df6;
  }
`;

const Login = ({ handleGoogleAuth, handleFacebookAuth, handleLoginModalToggle, reference }) => (
  <Modal name="Inicia sesión" ref={reference}>
    <Title>Inicia sesión para continuar</Title>
    <ButtonsBox>
      <RegisterForm />
      <StyledDivider horizontal>o continúa con</StyledDivider>
      <FacebookButton onClick={handleFacebookAuth}>
        <Image src={facebook} />
        <span style={{ alignSelf: "flex-end" }}>Facebook</span>
      </FacebookButton>
      <GmailButton onClick={handleGoogleAuth}>
        <Image src={google} />
        <span>Google</span>
      </GmailButton>
      <StyledDivider />
      <Footer>
        <span>¿No tienes cuenta en Pandora?</span>
        <RegisterAction onClick={handleLoginModalToggle} >Regístrate</RegisterAction>
      </Footer>
    </ButtonsBox>
  </Modal>
);
export default Login;
