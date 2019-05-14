import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const Box = styled.div`
  &&& {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Title = styled.p`
  &&& {
    font-size: 16px;
  color #4f4b65;
  font-weight: 600;
  margin-bottom: 6px;
  }

`;

const PaymentMethod = () => (
  <Box>
    <Title>
      Revisa el resumen de tu reserva antes de continuar con el pago
    </Title>
  </Box>
);

export default PaymentMethod;
