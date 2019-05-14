import React from "react";
import styled from "styled-components";

import Subtitle from "./Subtitle";

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const PolicieBox = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Policie = styled.p`
  &&& {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
    color: #4f4b65;
    margin-bottom: 16px
  }
`;
const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Description = styled.p`
  &&& {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: #4f4b65;
    line-height: 1.3;
    margin-bottom: 48px;
  }
`;

const Policies = ({ date, onDateChange, onFocusChange }) => (
  <Box>
    <Subtitle>
      <Title>Políticas</Title>
    </Subtitle>
    <PolicieBox>
      <Policie>Normas del Establecimiento</Policie>
      <Description>
        Puedes cancelar cualquier reserva durante las 2 horas siguientes al pago y recibir un reembolso total.
      </Description>
    </PolicieBox>
    <Policie>Cancelacion</Policie>
    <Description>
      Puedes cancelar cualquier reserva durante las 2 horas siguientes al pago y recibir un reembolso total.
    </Description>
  </Box>
);

export default Policies;
