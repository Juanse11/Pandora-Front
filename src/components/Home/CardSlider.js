import React, { Component } from "react";
import Slider from "react-slick";

import Card from "../Home/SportsSectionItem";

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      variableWidth: false
    };
    return (
      <Slider {...settings}>
          <Card image={this.props.image} sport={this.props.sport} />
          <Card image={this.props.image} sport={this.props.sport} />
          <Card image={this.props.image} sport={this.props.sport} />
          <Card image={this.props.image} sport={this.props.sport} />
          <Card image={this.props.image} sport={this.props.sport} />
          <Card image={this.props.image} sport={this.props.sport} />
      </Slider>
    );
  }
}
