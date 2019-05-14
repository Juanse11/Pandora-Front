import React, { Component } from "react";
import Login from "./Login";
import { firebase } from "../../firebase/firebase";

export default class LoginContainer extends Component {
  handleGoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.handleSignInWithPopUp(provider);
  };

  handleFacebookAuth = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.handleSignInWithPopUp(provider);
  };

  handleSignInWithPopUp = provider => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const token = result.credential.idToken;
        console.log(token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Login
        reference={this.props.reference}
        handleLoginModalToggle={this.props.handleLoginModalToggle}
        handleFacebookAuth={this.handleFacebookAuth}
        handleGoogleAuth={this.handleGoogleAuth}
      />
    );
  }
}
