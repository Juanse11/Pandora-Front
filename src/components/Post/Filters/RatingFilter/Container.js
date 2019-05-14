import React from "react";
import RatingFilter from "./RatingFilter";
import { connect } from "react-redux";
import { setRating } from "../../../../actions/filters";
import Container from "../PriceFilter/Container";

class RatingFilterContainer extends React.Component {
  state = {
    value: undefined,
    name: "Calificacion",
    isActive: false
  };

  onChange = (e, data) => {
    const value = !data.checked ? undefined : data.value;
    this.setState(() => ({ value }));
  };

  handleApplyChanges = async () => {
    let name = this.state.value
      ? ` ${this.state.value} ★ en adelante`
      : "Calificacion";
    let isActive = this.state.value ? true : false;
    this.props.setRating(this.state.value);
    this.setState({ name, isActive });
  };

  render() {
    return (
      <RatingFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        {...this.state}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRating: rating => {
      dispatch(setRating(rating));
    }
  };
};

const mapStateToProps = ({ filters: { rating } }) => {
  return {
    rating
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingFilterContainer);
