import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import TimePicker from "rc-time-picker";

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #4f4b65;
  }
`;
const StyledTimePicker = styled(TimePicker)`
  &&& {
    margin-top: 12px;
    max-width: 47%;
    & > input {
      cursor: pointer;
      font-size: 14px;
      color: #4f4b65;
      padding: 10px 15px;
      &::placeholder {
        color: #4f4b6566;
      }
    }
  }
`;

const BoxTime = styled.div`
  &&& {
    display: flex;
    justify-content: space-between;
  }
`;

const Submit = styled(Button)`
  &&& {
    background: none;
    padding: 0;
    cursor: pointer;
    margin-top: 12px;
    color: #3a91aa;
    align-self: flex-end;
    font-size: 14px;
    font-weight: 700;
    &:hover {
      background: none;
      color: #3a91aa;
      text-decoration: underline;
      text-decoration-color: #3a91aa;
    }
    &:hover {
      background: none;
      color: #3a91aa;
    }
    &:focus {
      background: none;
      color: #3a91aa;
    }
    &:active {
      background: none;
      color: #3a91aa;
    }
  }
`;

const HourPicker = ({
  handleEndTimeChange,
  handleStartTimeChange,
  handleSubmit,
  isSubmit
}) => (
  <Box>
    <Title>Selecciona una fecha para ver la disponibilidad</Title>
    <BoxTime>
      <StyledTimePicker
        use12Hours={true}
        placeholder="Hora inicial"
        showSecond={false}
        minuteStep={30}
        onChange={handleStartTimeChange}
      />
      <StyledTimePicker
        use12Hours={true}
        placeholder="Hora final"
        showSecond={false}
        minuteStep={30}
        onChange={handleEndTimeChange}
      />
    </BoxTime>
    <Submit onClick={handleSubmit}>Aplicar</Submit>
  </Box>
);

export default HourPicker;
