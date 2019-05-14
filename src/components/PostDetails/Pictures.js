import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Image = styled.img`
  
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  &&& {
    height: auto;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    flex-grow: 1;
    max-width: 100%;
    width: 350px;
    max-height: 100%;
  }
`;


export default class PictureSlider extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
      <div style={{padding: '0 20px'}}>
        <Slider {...settings}>
          <ImageBox>
            
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
        </Slider>
      </div>
    );
  }
}
