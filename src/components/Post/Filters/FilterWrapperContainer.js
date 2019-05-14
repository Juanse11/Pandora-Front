import React from "react";
import { connect } from "react-redux";
import FilterWrapper from "./FilterWrapper";
import { setDimmer } from "../../../actions/modal";

class FilterWrapperContainer extends React.Component {
  state = {
    isOpen: undefined
  };

  handleDropdownToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    this.props.setDimmer();
  };

  handleClearFilter = () => {
      this.props.handleClearFilter()
  }

  onClose = () => {
    this.handleDropdownToggle()
    this.props.handleApplyChanges();
  };

  render() {
    return (
      <FilterWrapper
        onClose={this.onClose}
        handleDropdownToggle={this.handleDropdownToggle}
        isOpen={this.state.isOpen}
        {...this.props}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        setDimmer: () => {
          dispatch(setDimmer());
        }
      };
};

export default connect(
  null,
  mapDispatchToProps
)(FilterWrapperContainer);
