import React, { Component } from "react";
import {
  Button,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Container
} from "semantic-ui-react";
import styled from "styled-components";
import HomePageHeading from "./HomePageHeading";
import logo from "../../assets/Pandora.svg";
import background from "../../assets/pitchblur.jpg";


const StyledSegment = styled(Segment)`
  &&& {
    padding: 0em;
    min-height: 540px;
    background-position: 50% 10%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${background});
    background-color: #88afdd;
    border: none;
    @media only screen and (min-width: 768px){
      min-height: 740px;
    }
  }
`;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%235c8fd8' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%234775b6' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%234c81cc' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23456ca5' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%235180c4' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%233b5b8a' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23517ab7' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23466797' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%234d6fa3' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23264c85' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%231a4e99' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%231c3c6b' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");

export default class DesktopContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Responsive maxWidth={5680}>
        <Visibility once={false}>
          <StyledSegment as={Segment}>
            <Menu
              size="small"
              secondary
              borderless
              pointing={false}
              style={{ padding: "0.5em 0", width: "100%" }}
            >
              <Container>
                <Menu.Item as="a">
                  <Image size="mini" src={logo} />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    style={{
                      background: "none",
                      color: "#fff",
                      fontSize: "1.3em",
                      fontWeight: 600,
                      borderRadius: 0,
                      padding: "1em",
                      paddingRight: "0.5em"
                    }}
                  >
                    Publica tu Empresa
                  </Button>
                  <Button
                    style={{
                      background: "none",
                      color: "#fff",
                      fontSize: "1.3em",
                      fontWeight: 600,
                      borderRadius: 0,
                      padding: "1em",
                      paddingLeft: "0.5em"
                    }}
                  >
                    Inicia Sesion
                  </Button>
                  <Button
                    style={{
                      background: "#483df6",
                      color: "#fff",
                      fontSize: "1.3em",
                      fontWeight: 600,
                      borderRadius: "2px"
                    }}
                  >
                    Registrate
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomePageHeading />
          </StyledSegment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}
