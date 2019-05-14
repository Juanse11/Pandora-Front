import React from "react";
import { withRouter } from "react-router-dom";
import Form from "./Form";



class FormContainer extends React.Component {
  state = {
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
  };

  render() {
    return <Form  onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

export default withRouter(FormContainer);
