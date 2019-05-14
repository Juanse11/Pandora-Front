import React from "react";
import { withRouter } from "react-router-dom";
import API from "../../api/api";

import Content from "./Content";

class ContentContainer extends React.Component {
  state = {
    post: {
      pictures: [],
      sports: [],
      coordinates: []
    }
  };

  async componentDidMount() {
    const postID = this.props.match.params.id;
    const response = await API.get(`posts/${postID}`);
    await this.setState({ post: response.data.post });
    console.log(this.state.post);
  }

  render() {
    return <Content {...this.state} />;
  }
}

export default withRouter(ContentContainer);
