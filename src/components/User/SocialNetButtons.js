import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  &&& {
    min-height: 48px;
    max-height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 13px 22px;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    background: #483df6;
    &:hover {
      background: #483df6;
      color: #fff;
    }
    &:focus {
      background: #483df6;
      color: #fff;
    }
    &:active {
      background: #483df6;
      color: #fff;
    }
  }
`;

export const FacebookButton = styled(StyledButton)`
  &&& {
    color: #fff;
    background: rgb(69, 104, 178);
    border-radius: 4px;
    border: 2px solid transparent;
    margin-bottom: 8px;
    &:active {
      background: rgb(69, 104, 178);
      color: #fff;
    }
    &:focus {
      background: rgb(69, 104, 178);
      color: #fff;
    }
    &:hover {
      background: rgb(69, 104, 178);
      color: #fff;
    }
  }
`;

export const GmailButton = styled(StyledButton)`
  &&& {
    background: #fff;
    border-radius: 4px;
    color: #4f4b65;
    border: 2px solid rgb(118, 118, 118);
    &:hover {
      background: none;
      color: #4f4b65;
    }
    &:active {
      background: none;
      color: #4f4b65;
    }
    &:focus {
      background: none;
      color: #4f4b65;
    }
  }
`;

export const EmailButton = styled(StyledButton)`
  &&& {
    background: #3a91aa;
    color: #fff;
    border-radius: 4px;
    border: 2px solid transparent;
    &:hover {
      background: #3a91aa;
      color: #fff;
    }
    &:focus {
      background: #3a91aa;
      color: #fff;
    }
    &:active {
      background: #3a91aa;
      color: #fff;
    }
  }
`;
