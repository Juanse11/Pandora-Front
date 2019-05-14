import React from "react";
import NavBar from '../components/shared/NavBar'
import PostContent from '../components/PostDetails/ContentContainer'
import Footer from "../components/shared/Footer";
export default class PostPage extends React.Component {
 
  render() {
    return (
        <div>
          <NavBar>
            <PostContent />
          </NavBar>
          <Footer />
        </div>
    );
  }
}
