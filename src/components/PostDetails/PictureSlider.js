import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  border-radius: 0 !important;
`;

const StyledIcon = styled(Icon)`
  &&&&&&&& {
    color: #4f4b65;
    cursor: pointer;
    font-size: 15px;
    margin-right: 0.5em;
    &:hover {
      color: #4f4b65;
    }
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

const ImageBox = styled.div`
  &&& {
    border-radius: 0 !important;
    height: 320px;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    flex-grow: 1;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
`;

const StyledButton = styled(Button)`
  &&& {
    position: absolute;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.083em;
    bottom: 24px;
    right: 24px;
    background: #fff;
    color: #4f4b65;
    &:hover {
      background: #fff;
    }
    display: flex;
    padding: 12px 22px;
  }
`;

export default class PictureSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 8000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      initialSlide: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {this.props.pictures.map((picture, index) => (
            <ImageBox key={index}>
              <Image src={picture} />
            </ImageBox>
          ))}
        </Slider>
        <StyledButton>
          <StyledIcon name="grid layout" /> MOSTRAR FOTOS
        </StyledButton>
      </div>
    );
  }
}
