import React from "react";
import styled from "styled-components";
import { Card, Icon, Rating, Placeholder } from "semantic-ui-react";

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  border-radius: 4px !important;
`;

const StyledCard = styled(Card)`
  &&& {
    &:hover {
      box-shadow: none;
      top: 0;
    }
    position: relative;
    box-shadow: none;
    width: 100%;
    height: 100%;
    max-height: 600px;
    border: none;
    transition: none;

    @media only screen and (min-width: 768px) {
    }
  }
`;

const Content = styled(Card.Content)`
  &&&&&&&&& {
    padding: 0;
    padding-top: 12px;
    max-height: 115px;
    height: 100%
    width: 100%;
    border: none;
    transition: none;
    background: transparent;
  }
`;

const ImageBox = styled.div`
  &&& {
    height: auto;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    flex-grow: 1;
    max-width: 100%;
    overflow: hidden;
    height: 180px;
    max-height: 100%;
  }
`;

const CardItem = ({
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
  <StyledCard
    onClick={() => handleGoToPostPage(id)}
    onMouseEnter={() => handleSelectedPark({ id, coordinates })}
    onMouseLeave={() => handleSelectedPark({})}
  >
    {isLoading ? (
      <Placeholder>
        <Placeholder.Image style={{ backgroundColor: "#3a91aa7d" }} square />
      </Placeholder>
    ) : (
      <ImageBox>
        <Image src={pictures[0]} />
      </ImageBox>
    )}
    <Content>
      {isLoading ? (
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      ) : (
        <React.Fragment>
          <Card.Meta
            style={{
              marginBottom: "4px",
              fontSize: "12px",
              fontWeight: 800,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          >
            <Icon name="table tennis" />
            <span>
              {sports.map((sport, index) =>
                index === sports.length - 1 ? (
                  <span key={sport}>{sport.toUpperCase()}</span>
                ) : (
                  <span key={sport}>{sport.toUpperCase()} &middot;</span>
                )
              )}
              <span>&middot;</span>GRAMA SINTÉTICA <span>&middot; </span>
              CUBIERTO
            </span>
          </Card.Meta>
          <Card.Header
            style={{
              fontWeight: 700,
              color: "#4f4b65",
              fontSize: "18px",
              wordWrap: "break-all",
              whiteSpace: "normal"
            }}
          >
            {title}
          </Card.Header>
          <Card.Description
            style={{
              marginTop: 0,
              fontWeight: 400,
              color: "#4f4b65",
              fontSize: "14px",
              textAlign: "left",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          >
            {price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0
            })}{" "}
            COP por hora
          </Card.Description>
          <Rating
            icon="star"
            disabled
            defaultRating={rating}
            maxRating={5}
            style={{
              marginTop: "0.2em",
              marginBottom: "1em",
              fontSize: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          />
          <span
            style={{
              paddingLeft: "5px",
              color: "#3a91aac9",
              fontWeight: 700,
              fontSize: "12px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
          >
            {rating}
          </span>
        </React.Fragment>
      )}
    </Content>
  </StyledCard>
);

export default CardItem;
