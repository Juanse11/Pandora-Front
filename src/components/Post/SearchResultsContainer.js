import React from "react";
import { withRouter } from "react-router-dom";
import SearchResults from "./SearchResults";
import { connect } from "react-redux";
import API from "../../api/api";
import qs from "qs";

class SearchResultsContainer extends React.Component {
  state = {
    items: [],
    isLoading: true,
    isBlockLayout: true,
    isListLayout: false,
    selectedPark: {
      id: "",
      coordinates: []
    }
  };

  componentDidUpdate(prevProps) {
    if (!Object.is(prevProps.filters, this.props.filters)) {
      this.getPosts();
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  handleGoToPostPage = postID => {
    window.open(`/publicacion/${postID}`);
  };

  handleSelectedPark = selectedPark => {
    this.setState({ selectedPark });
  };

  handleBlockSelection = () => {
    this.setState({ isBlockLayout: true });
    this.setState({ isListLayout: false });
  };

  handleListSelection = () => {
    this.setState({ isBlockLayout: false });
    this.setState({ isListLayout: true });
  };

  getPosts = async () => {
    let items = this.fetchPlaceholderItems();

    await this.setState({ isLoading: true, items });
    items = await this.fetchItems();
    console.log(items);
    
    await this.setState(() => ({ items, isLoading: false }));
  };
  fetchItems = async () => {
    const response = await API.get(`posts?${qs.stringify(this.props.filters)}`);
    return response.data.posts;
  };

  fetchPlaceholderItems = () => {
    const items = [
      {
        id: 960,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1219,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1157,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 9,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1160,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1693,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1717,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 137,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1133,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 657,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 653,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 812,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 2457,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 812,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      }
    ];
    return items;
  };

  render() {
    return (
      <SearchResults
        {...this.state}
        handleGoToPostPage={this.handleGoToPostPage}
        handleSelectedPark={this.handleSelectedPark}
        handleBlockSelection={this.handleBlockSelection}
        handleListSelection={this.handleListSelection}
      />
    );
  }
}

const mapStateToProps = ({ filters }) => {
  return {
    filters
  };
};

export default connect(mapStateToProps)(withRouter(SearchResultsContainer));
