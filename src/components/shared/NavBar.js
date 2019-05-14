import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Menu, Responsive, Sidebar, Button, Image } from "semantic-ui-react";
import SearchBar from "../shared/SearchBarContainer";
import logo from "../../assets/purplePandora.svg";
import arrow from "../../assets/down-arrow.svg";
import Register from "../User/Register/RegisterContainer";
import Login from "../User/Login/LoginContainer";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const Arrow = styled.img`
  &&&&& {
    object-fit: contain;
    height: 10px;
    width: 10px;
    max-width: 10px;
    margin-left: 8px;
  }
`;

const LogoItem = styled(Menu.Item)`
  &&&& {
    padding-right: 0;
    &:hover {
      background: transparent;
      background-color: transparent;
    }
  }
`;

const SearchItem = styled(Menu.Item)`
  &&& {
    flex-shrink: 1;
    width: 70%;
  }
`;

const StyledMenu = styled(Menu)`
  &&& {
    z-index: 9999;
    background-color: #fff;
    display: flex;
    border: none;
    border-bottom: 1px solid rgb(228, 228, 228);
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    border-right: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    flex-shrink: 1;
    min-width: 0;
    margin: 0;
  }
`;

const StyledPusher = styled(Sidebar.Pusher)`
  &&& {
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    flex-shrink: 1;
    min-width: 0;
    margin: 0;
  }
`;

const MenuItemBlock = styled.div`
  &&& {
    display: flex;
    height: 100%;
    &:hover {
      padding-top: 2px;
      border-bottom: 2px solid #483df6;
      background: none;
    }
  }
`;

const StyledButton = styled(Button)`
  &&&& {
    background: none;
    vertical-align: middle;
    color: #4f4b65;
    font-size: 1em;
    font-weight: 600;
    border-radius: 0;
    padding: 0em 16px;
    &:hover {
      background: none;
    }
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.loginElement = React.createRef();
    this.registerElement = React.createRef();
  }

  state = { isLogin: false, isRegister: false };

  handleLoginModalToggle = () => {
    this.loginElement.current.handleOpen();
    this.registerElement.current.handleClose();
  };

  handleRegisterModalToggle = () => {
    this.loginElement.current.handleClose();
    this.registerElement.current.handleOpen();
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () =>
    this.setState(prevState => ({ sidebarOpened: !prevState.sidebarOpened }));

  render() {
    const { children, startLogout } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <div>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Menu
            size="large"
            borderless
            pointing={false}
            style={{
              position: "sticky",
              top: 0,
              zIndex: 9,
              margin: 0,
              backgroundColor: "#fff",
              border: "none",
              padding: "0.5em 0",
              display: "flex",
              paddingTop: 0,
              height: "80px",
              paddingBottom: 0,
              borderBottom: "1px solid rgb(228, 228, 228)",
              boxShadow: "none",
              borderRadius: 0,
              borderRight: 0
            }}
          >
            <LogoItem style={{ paddingRight: "5px", paddingLeft: "24px" }}>
              <Image size="mini" src={logo} />
            </LogoItem>
            <Menu.Item
              style={{ width: "100%", maxWidth: "460px", flexShrink: "1" }}
            >
              <SearchBar />
            </Menu.Item>
            <Menu.Item
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                display: "flex",
                flexShrink: "1"
              }}
              position="right"
            >
              <MenuItemBlock style={{ flexShrink: "1", whiteSpace: "nowrap" }}>
                <StyledButton>Publica tu Empresa</StyledButton>
              </MenuItemBlock>
              {this.props.isUserLoggedIn ? (
                <MenuItemBlock
                  style={{ flexShrink: "1", whiteSpace: "nowrap" }}
                >
                  <StyledButton onClick={startLogout}>
                    Cerrar sesion
                  </StyledButton>
                </MenuItemBlock>
              ) : (
                <React.Fragment>
                  <MenuItemBlock
                    style={{ flexShrink: "1", whiteSpace: "nowrap" }}
                  >
                    <Login
                      handleLoginModalToggle={this.handleLoginModalToggle}
                      reference={this.registerElement}
                    >
                      Inicia Sesion
                    </Login>
                  </MenuItemBlock>
                  <MenuItemBlock
                    style={{ flexShrink: "1", whiteSpace: "nowrap" }}
                  >
                    <Register
                      handleRegisterModalToggle={this.handleRegisterModalToggle}
                      reference={this.loginElement}
                    >
                      Registrate
                    </Register>
                  </MenuItemBlock>
                </React.Fragment>
              )}
            </Menu.Item>
          </Menu>
          {children}
        </Responsive>
        <Responsive
          as={Sidebar.Pushable}
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="top"
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Inicio</Menu.Item>
            <Menu.Item as="a">Publica tu Empresa</Menu.Item>
            <Menu.Item as="a">Inicia Sesion</Menu.Item>
            <Menu.Item as="a">Registrate</Menu.Item>
          </Sidebar>

          <StyledPusher dimmed={sidebarOpened}>
            <StyledMenu size="large" borderless pointing={false}>
              <LogoItem
                onClick={this.handleToggle}
                style={{
                  paddingLeft: "24px",
                  paddingRight: "5px",
                  flexShrink: "1"
                }}
              >
                <Image
                  style={{ width: "35px", height: "35px", maxWidth: "2000px" }}
                  src={logo}
                />
                <Arrow src={arrow} />
              </LogoItem>
              <SearchItem>
                <SearchBar />
              </SearchItem>
            </StyledMenu>
            {children}
          </StyledPusher>
        </Responsive>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = ({ auth }) => ({
  isUserLoggedIn: !!auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)