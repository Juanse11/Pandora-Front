import React, { Component } from "react";
import Modal from "./Modal";

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });


  render() {
    return (
      <Modal
        {...this.state}
        name={this.props.name}
        children={this.props.children}
        isLogin={this.props.isLogin}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
      />
    );
  }
}
