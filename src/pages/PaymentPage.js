import React from "react";
import NavBar from "../components/shared/NavBar";
import Payment from "../components/Payment/Content";
import Footer from "../components/shared/Footer";
export default class PostPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <NavBar>
          <Payment
            post={this.props.location.data.post}
            date={this.props.location.data.date.format("dddd, MMMM D")}
            startTimeValue={this.props.location.data.startTimeValue.format(
              "hh:mm a"
            )}
            endTimeValue={this.props.location.data.endTimeValue.format(
              "hh:mm a"
            )}
          />
        </NavBar>
        <Footer />
      </div>
    );
  }
}
