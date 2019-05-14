import React, { Component } from "react";
import Register from "./Register";
import { firebase } from "../../firebase/firebase";

export default class RegisterContainer extends Component {
  state = { isEmailClicked: false };

  handleEmailClick = () => {
    this.setState(prevState => ({ isEmailClicked: !prevState.isEmailClicked }));
  };

  handleGoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.handleSignInWithPopUp(provider)
  };

  handleFacebookAuth = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    this.handleSignInWithPopUp(provider)
  }

  handleSignInWithPopUp = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(user, token);
      })
      .catch(error => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(error);
      });
  }

  render() {
    return (
      <Register
        {...this.state}
        isLogin={this.props.isLogin}
        reference={this.props.reference}
        handleRegisterModalToggle={this.props.handleRegisterModalToggle}
        handleFacebookAuth={this.handleFacebookAuth}
        handleGoogleAuth={this.handleGoogleAuth}
        handleEmailClick={this.handleEmailClick}
      />
    );
  }
}
