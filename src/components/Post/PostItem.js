import React, { Fragment } from "react";
import styled from "styled-components";
import { Icon, Rating, Item, Placeholder } from "semantic-ui-react";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  min-width: 300px;
  height: 100%;
  border-radius: 3px;
`;

const Box = styled.div`
  &&& {
    width: 300px;
    height: 200px;
  }
`;

const StyledItem = styled(Item)`
  &&& {
    border: 1px solid rgb(235, 235, 235);
    border-radius: 3px;
    box-shadow: none;
    display: flex;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    }
  }
`;

const Sport = styled.p`
  &&& {
      font-size: 12px;
      color: #767676
      font-weight: 700;
      line-height: 1.33em
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;
  }
`;

const Position = styled.p`
  &&& {
      font-size: 16px;
      color: #483df6
      font-weight: 700;
      line-height: 1.33em
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-left: auto;
  }
`;

const Title = styled.p`
  &&& {
      font-size: 18px;
      color: #4f4b65
      font-weight: 800;
      line-height: 1.44m
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;

  }
`;
const Details = styled.p`
  &&& {
      max-width: 100%;
      font-size: 14px;
      color: #4f4b65
      font-weight: 400;
      line-height: 1.44em
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: block;
      margin: 0;

  }
`;
const Price = styled.p`
&&& {
    font-size: 18px;
    color: #4f4b65
    font-weight: 800;
    line-height: 1.44em
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: auto;
    align-self: center;
}
`;
const StyledRating = styled(Rating)`
  &&& {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-self: center;
    font-size: 12px;
  }
`;
const Content = styled(Item.Content)`
  &&& {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    padding: 1.5em;
  }
`;

const RatingContainer = styled.div`
  &&& {
    display: flex
    justify-content: flex-start;
    margin-top: ${props => (props.rating ? "auto" : 0)};
}
`;

const PlaceholderBox = styled(Placeholder)`
  &&& {
    width: 100%;
    min-width: 300px;
    height: 100%;
  }
`;
const PlaceholderImage = styled(Placeholder.Image)`
  &&&&&&&&& {
    padding-top: 0;
    width: 100%;
    height: 100%;
    background-color: #3a91aa7d;
  }
`;

const PostItem = ({
  title,
  price,
  rating,
  sports,
  pictures,
  isLoading,
  id,
  coordinates,
  handleSelectedPark,
  handleGoToPostPage
} = {}) => (
  <StyledItem
    onClick={() => handleGoToPostPage(id)}
    onMouseEnter={() => handleSelectedPark({ id, coordinates })}
    onMouseLeave={() => handleSelectedPark({})}
  >
    <Box>
      {isLoading ? (
        <PlaceholderBox>
          <PlaceholderImage square />
        </PlaceholderBox>
      ) : (
        <Image src={pictures[0]} />
      )}
    </Box>
    <Content>
      {isLoading ? (
        <div>
          <div
            style={{ display: "flex", height: "60%", flexDirection: "column" }}
          >
            <Placeholder style={{ display: "flex", flexDirection: "column" }}>
              <Placeholder.Paragraph>
                <Placeholder.Line length="very short" />
                <Placeholder.Line length="full" />
                <Placeholder.Line length="very long" />
                <Placeholder.Line length="long" />
              </Placeholder.Paragraph>
            </Placeholder>
          </div>
          <div
            style={{
              display: "flex",
              height: "100%",
              marginTop: "9%"
            }}
          >
            <div style={{ height: "100%", width: "100%" }}>
              <Placeholder style={{}}>
                <Placeholder.Line length="short" />
              </Placeholder>
            </div>
            <div style={{ height: "100%", width: "100%" }}>
              <Placeholder style={{ textAlign: "right", marginLeft: "60%" }}>
                <Placeholder.Line length="full" />
              </Placeholder>
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <RatingContainer>
            <Sport>
              <Icon name="soccer" style={{ fontSize: "12px" }} />
              {sports.map((sport, index) =>
                index === sports.length - 1 ? (
                  <span>{sport.toUpperCase()}</span>
                ) : (
                  <span>{sport.toUpperCase()} &middot; </span>
                )
              )}
            </Sport>
            <Position>
              <Icon name="map marker alternate" style={{ fontSize: "18px" }} />
              <span style={{ color: "#4f4b65" }}>a 3,5km</span>
            </Position>
          </RatingContainer>
          <Title>
            <span className="cinema">{title}</span>
          </Title>
          <Details>
            Grama sintética <span>&middot;</span> Cubierto
          </Details>
          <Details>
            Vestidores <span>&middot;</span> Duchas <span>&middot;</span>{" "}
            Cafetería <span>&middot;</span> Parqueadero gratis
          </Details>

          <RatingContainer rating>
            <span
              style={{
                "padding-right": "5px",
                alignSelf: "center",
                color: "#3a91aac9",
                fontWeight: 700,
                fontSize: "12px"
              }}
            >
              {rating}
            </span>
            <StyledRating
              icon="star"
              disabled
              defaultRating={rating}
              maxRating={5}
            />
            <span
              style={{
                "padding-left": "5px",
                alignSelf: "center",
                color: "#4f4b65",
                fontWeight: 600,
                fontSize: "12px"
              }}
            >
              &middot; 120
            </span>
            <Price>
              {price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0
              })}{" "}
              COP
              <span style={{ fontSize: "14px", fontWeight: 600 }}>/hora</span>
            </Price>
          </RatingContainer>
        </Fragment>
      )}
    </Content>
  </StyledItem>
);

export default PostItem;
