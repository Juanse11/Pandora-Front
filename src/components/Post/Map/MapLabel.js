import React from "react";
import styled from "styled-components";
import { Label } from "semantic-ui-react";

const StyledMarker = styled(Label)`
  &&&&&&&& {
    white-space: nowrap;
    position: absolute;
    padding: 4px 5px 4px 6px;
    font-size: 14px;
    font-weight: 800;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    transition: none;
    &::before {
      transition: none;
    }
    ${props =>
      props.isactive
        ? `
      background: #3a91aa;
      z-index: 9;
      color: #fff;
    `
        : `background: #white;
    z-index: 1;
    color: #767676;`};
  }
`;

export default class CustomMarker extends React.PureComponent {
  render() {
    return (
      <StyledMarker isactive={this.props.isActive ? 1 : 0} pointing="below">
        {this.props.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })} COP 
      </StyledMarker>
    );
  }
}
