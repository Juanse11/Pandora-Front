import React from "react";
import Availability from "./Availability";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";

import API from "../../../api/api";

export default class Container extends React.Component {
  state = {
    date: moment().startOf("day"),
    focused: true,
    isActive: false,
    startTimeValue: moment(),
    endTimeValue: moment(),
    dateTimeFrom: "",
    dateTimeTo: "",
    isLoading: false,
    isSubmit: false,
    bookings: [],
    bookingDate: "",
    bookingStartTimeValue: "",
    bookingEndTimeValue: ""
  };

  handleApplyChanges = () => {
    let name = "Fecha";
    let isActive = false;
    if (this.state.date) {
      name = `${this.state.date}`;
      isActive = true;
    }

    if (this.state.date !== name) {
      this.setState({ name, isActive });
    }
  };

  onDateChange = async date => {
    if (date) {
      await this.setState({ date: date.startOf("day") });
      this.handleSubmit();
    }
  };
  onFocusChange = () => {
    this.setState({ focused: true });
  };

  handleStartTimeChange = async value => {
    this.handleSubmit();
    await this.setState({ startTimeValue: value });
    this.handleSubmit();
  };

  handleEndTimeChange = async value => {
    this.handleSubmit();
    await this.setState({ endTimeValue: value });
    this.handleSubmit();
  };

  handleSubmit = async () => {
    if (
      this.state.startTimeValue &&
      this.state.endTimeValue &&
      this.state.date
    ) {
      this.setState({ isLoading: true, isSubmit: true });
      let dateTimeFrom = this.state.date.clone().add({
        hours: this.state.startTimeValue.hour(),
        minutes: this.state.startTimeValue.minute()
      });

      let dateTimeTo = this.state.date.clone().add({
        hours: this.state.endTimeValue.hour(),
        minutes: this.state.endTimeValue.minute()
      });
      this.setState({ dateTimeFrom, dateTimeTo });
      const response = await API.get(
        `bookings?dateTimeTo=${dateTimeTo.format()}&dateTimeFrom=${dateTimeFrom.format()}`
      );
      console.log(response.data);

      this.setState(prevState => ({
        bookings: response.data.bookings,
        isLoading: false
      }));
    }
  };

  handleBooking = async () => {
    const response = API.post(`bookings`, {
      postID: this.props.postID,
      sellerID: this.props.sellerID,
      buyerID: 200,
      dateTimeTo: this.state.dateTimeTo.format(),
      dateTimeFrom: this.state.dateTimeFrom.format()
    });
    console.log(response.data);
  };

  render() {
    return (
      <Availability
        {...this.state}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        handleBooking={this.handleBooking}
        handleStartTimeChange={this.handleStartTimeChange}
        handleEndTimeChange={this.handleEndTimeChange}
        handleSubmit={this.handleSubmit}
        price={this.props.price}
        post={this.props.post}
      />
    );
  }
}

// const mapStateToProps = ({ sports }) => ({ sports });
// const mapDispatchToProps = dispatch => {
//   return {
//     setDate: date => dispatch(setDate(date))
//   };
// };
