import React from "react";
import { withRouter } from "react-router-dom";
import moment from 'moment'
import SearchForm from "./SearchForm";

class SearchFormContainer extends React.Component {
  state = {
    barrio: "",
    deporte: "",
    fecha: undefined,
    createdAt: moment(),
    calendarFocused: false
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.value;
    this.setState(() => ({ [field]: value }));
  };

  onSubmit = e => {
    e.preventDefault();
  };
  onDateChange = createdAt => {
    if (createdAt) {
      console.log(createdAt)
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return <SearchForm createdAt={this.state.createdAt} onChange={this.onChange} onSubmit={this.onSubmit} onDateChange={this.onDateChange} onFocusChange={this.onFocusChange} calendarFocused={this.state.calendarFocused} />;
  }
}

export default withRouter(SearchFormContainer);
