import React from "react";
import styled from "styled-components";
import { Button, Header, Container, Divider, Icon } from "semantic-ui-react";
import { FacebookButton, GmailButton, EmailButton } from "../SocialNetButtons";
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
const RegisterHeader = styled.p`
  &&& {
    text-align: center;
    font-size: 14px;
    color: #4f4b65;
    font-weight: 700;
  }
`;
const LoginAction = styled.a`
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

const Register = ({
  handleEmailClick,
  isEmailClicked,
  handleGoogleAuth,
  handleFacebookAuth,
  handleRegisterModalToggle,
  isLogin,
  reference
}) => (
  <Modal name="Registrate" isLogin={isLogin} ref={reference}>
    {isEmailClicked ? (
      <React.Fragment>
        <RegisterHeader>
          <span>Regístrate con </span>
          <a style={{ color: "#3a91aa", cursor: "pointer" }}> Facebook </a>
          <span> o </span>
          <a style={{ color: "#3a91aa", cursor: "pointer" }}> Google </a>
        </RegisterHeader>
        <StyledDivider horizontal>
          <span style={{ color: "#767676", fontSize: "10px" }}>o</span>
        </StyledDivider>
        <ButtonsBox>
          <RegisterForm />
          <StyledDivider />
          <Footer>
            <span>¿Ya tienes una cuenta en Pandora?</span>
            <LoginAction onClick={handleRegisterModalToggle}>Inicia sesion</LoginAction>
          </Footer>
        </ButtonsBox>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Title>¡Crea una cuenta gratis!</Title>
        <ButtonsBox>
          <FacebookButton onClick={handleFacebookAuth}>
            <Image src={facebook} />
            <span style={{ alignSelf: "flex-end" }}>
              Registrarse con Facebook
            </span>
          </FacebookButton>
          <GmailButton onClick={handleGoogleAuth}>
            <Image src={google} />
            <span>Registrarse con Google</span>
          </GmailButton>
          <StyledDivider horizontal>
            <span style={{ color: "#767676", fontSize: "12px" }}>o</span>
          </StyledDivider>
          <EmailButton onClick={handleEmailClick}>
            <Icon
              name="mail outline"
              style={{ color: "#fff", fontSize: "18px" }}
            />
            <span style={{ alignSelf: "flex-end" }}>
              Registrarse con un correo electrónico
            </span>
          </EmailButton>
          <StyledDivider />
          <Footer>
            <span>¿Ya tienes una cuenta en Pandora?</span>
            <LoginAction onClick={handleRegisterModalToggle}>Inicia sesion</LoginAction>
          </Footer>
        </ButtonsBox>
      </React.Fragment>
    )}
  </Modal>
);
export default Register;
