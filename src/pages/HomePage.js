import React from "react";
import HomePageContainer from "../components/Home/HomePageContainer";
import MeetSection from '../components/Home/MeetSection'
import SportsSection from '../components/Home/SportsSection'
import TopItemsSection from "../components/Home/TopItemsSection";
import Footer from "../components/Home/Footer";

export default class HomePage extends React.Component {
  state = {
    items: []
  };

  render() {
    return (
      <HomePageContainer>
        <MeetSection />
        <TopItemsSection />
        <Footer />
      </HomePageContainer>
    );
  }
}
