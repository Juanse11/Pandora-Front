import React from "react";
import styled from "styled-components";
import { Icon, Divider, Rating } from "semantic-ui-react";

const Container = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    padding: 24px;
    border: 1px solid rgb(228, 228, 228);
  }
`;

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Item = styled.div`
  &&& {
    display: flex;
    align-items: center;
    padding-bottom: 6px;
  }
`;

const ItemText = styled.p`
  &&& {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.28em;
    color: #4f4b65;
    margin: 0;
    margin-bottom: 2px;
  }
`;

const PostTitle = styled.p`
  &&& {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.28em;
    margin: 0;
    color: #4f4b65;
    margin-bottom: 6px;
  }
`;

const StyledIcon = styled(Icon)`
  &&& {
    font-size: 16px;
    margin-right: 8px;
    color: #4f4b65;
    align-self: flex-start;
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

const StyledRating = styled(Rating)`
  &&& {
    display: block;
    font-size: 16px;
    height: 100%;
    &::before {
      height: 100%;
    }
    margin-bottom: 6px;
  }
`;

const ImageBox = styled.div`
  &&& {
    height: 94px;
    width: 60px;
    display: flex;
    max-width: 100%;
    max-height: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  border-radius: 2px !important;
`;

const CardSummary = ({ post, date, startTimeValue, endTimeValue }) => (
  <Container>
    <Item style={{ padding: 0, justifyContent: "space-between" }}>
      <Box style={{ marginTop: 0 }}>
        <PostTitle>{post.title}</PostTitle>
        <StyledRating icon="star" disabled defaultRating={5} maxRating={5} />
        <ItemText>154 evaluaciones</ItemText>
      </Box>
      <ImageBox>
        <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
      </ImageBox>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <StyledIcon name="map marker alternate" />
      <ItemText>{post.address}</ItemText>
    </Item>
    <Item>
      <StyledIcon name="phone" />
      <ItemText>(304) 545-4488</ItemText>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <StyledIcon name="shower" />
      <ItemText>Regaderas</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>Sí</ItemText>
    </Item>
    <Item>
      <StyledIcon name="food" />
      <ItemText>Cafetería</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>Sí</ItemText>
    </Item>
    <Item>
      <StyledIcon name="car" />
      <ItemText>Parqueadero</ItemText>
      <ItemText style={{ marginLeft: "auto", maxWidth: "130px" }}>Sí</ItemText>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <Box style={{ padding: 0 }}>
        <ItemText style={{ marginBottom: "6px" }}>{date}</ItemText>
        <ItemText style={{ marginBottom: "6px" }}>
          {startTimeValue} - {endTimeValue}
        </ItemText>
      </Box>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <ItemText>${post.price} por 1 hora</ItemText>
      <ItemText style={{ marginLeft: "auto" }}>${post.price}</ItemText>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <ItemText style={{ fontWeight: "800" }}>Total (COP)</ItemText>
      <ItemText style={{ marginLeft: "auto", fontWeight: "800" }}>
        ${post.price}
      </ItemText>
    </Item>
    <Divider style={{ margin: "16px 0" }} />
    <Item>
      <Box>
        <ItemText style={{ color: "#483df6", marginBottom: "8px" }}>
          Politica de cancelación
        </ItemText>
        <ItemText style={{ fontSize: "14px" }}>
          Obtén un reembolso completo si cancelas durante las 2 horas siguientes
          al pago.
        </ItemText>
      </Box>
    </Item>
  </Container>
);

export default CardSummary;
