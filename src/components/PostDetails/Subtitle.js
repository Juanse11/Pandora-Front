import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
const HeaderBox = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Box = styled.div`
  &&& {
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      margin-bottom: 16px;
  }
`

const Subtitle = ({ children }) => (
  <Box>
    <HeaderBox>
      {children}
    </HeaderBox>
  </Box>
);

export default Subtitle;
