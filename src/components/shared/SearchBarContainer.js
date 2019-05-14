import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { setTextFilter } from "../../actions/filters";

class SearchExampleStandard extends React.Component {
  state = {
    value: undefined
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      this.setState({
        isLoading: false
      });
    }, 300);
  };

  handleSubmit = e => {
    if (e.key === "Enter") {
      console.log(2151);

      this.props.setTextFilter(this.state.value.toLowerCase());
    }
  };

  render() {
    return (
      <SearchBar
        onKeyPress={this.handleSubmit}
        {...this.state}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchExampleStandard);
