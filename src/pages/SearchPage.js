import React from "react";
import Header from "../components/Post/SearchHeader";
import Results from "../components/Post/SearchResultsContainer";

export default class SearchPage extends React.Component {
 
  render() {
    return (
        <div style={{ paddingBottom: "10em" }}>
          <Header>
            <Results />
          </Header>
        </div>
    );
  }
}
