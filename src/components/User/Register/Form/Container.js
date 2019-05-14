import React from "react";
import { withRouter } from "react-router-dom";
import Form from "./Form";
import firebase from '../../../firebase/firebase'



class FormContainer extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    mail: '',
    password: '',
    checkbox: false
  };

  onChange = (e, data) => {
    
    const field = data.name;
    const value = data.checked || data.value;
    this.setState(() => ({ [field]: value }));
  };

  onSubmit = e => {
    e.preventDefault();
    firebase.createUserWithEmailAndPassword(this.state.mail, this.state.password).catch((error) => {
      console.log(error.code)
    })
  };

  render() {
    return <Form  onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

export default withRouter(FormContainer);
