import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { Divider, Grid, Loader, Button } from "semantic-ui-react";
import { DayPickerSingleDateController } from "react-dates";
import { withRouter } from "react-router";

import Subtitle from "../Subtitle";
import HourPicker from "./HourPicker";

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const DateInfo = styled.p`
  &&& {
    margin: 0;
    margin: 0px 0 6px;
    font-size: 14px;
    color: #4f4b65;
    font-weight: 400;
  }
`;
const DateOptions = styled.div`
  &&& {
    display: flex;
    justify-content: space-between;
  }
`;

const DateOptionsDescription = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const SelectOption = styled(Link)`
  &&& {
    padding: 8px 15px;
    align-self: center;
    border: 2px solid #483df6;
    background: #483df6;
    display: inline-block;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
    &:hover {
      background: #483df6;
      color: #fff;
    }
  }
`;

const Availability = ({
  date,
  onDateChange,
  onFocusChange,
  handleEndTimeChange,
  handleStartTimeChange,
  isLoading,
  isSubmit,
  price,
  handleSubmit,
  bookings,
  startTimeValue,
  endTimeValue,
  handleBooking,
  post,
  history
}) => (
  <Box>
    <Subtitle>
      <Title>Disponibilidad</Title>
    </Subtitle>
    <Grid style={{ marginTop: "-14px" }}>
      <Grid.Column style={{ padding: 0 }} computer={8}>
        <DayPickerSingleDateController
          date={date}
          onDateChange={onDateChange}
          focused={true}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => moment().diff(day) >= 0}
          hideKeyboardShortcutsPanel
        />
      </Grid.Column>
      <Grid.Column computer={8}>
        <HourPicker
          isSubmit={isSubmit}
          handleSubmit={handleSubmit}
          handleStartTimeChange={handleStartTimeChange}
          handleEndTimeChange={handleEndTimeChange}
        />
        {isSubmit &&
          (isLoading ? (
            <Loader
              style={{ marginTop: "46px" }}
              active={isLoading}
              inline="centered"
            />
          ) : (
            <React.Fragment>
              {bookings.length === 0 ? (
                <React.Fragment>
                  <DateInfo style={{ paddingTop: "16px" }}>
                    {date.format("dddd, MMMM D")}
                  </DateInfo>
                  <Divider style={{ margin: "16px 0" }} />
                  <DateOptions>
                    <DateOptionsDescription>
                      <DateInfo>
                        {startTimeValue.format("hh:mm a")} -
                        {endTimeValue.format("hh:mm a")}
                      </DateInfo>
                      <DateInfo>
                        {price.toLocaleString("es-CO", {
                          style: "currency",
                          currency: "COP",
                          minimumFractionDigits: 0
                        })}{" "}
                        COP por hora
                      </DateInfo>
                      <DateInfo>10 canchas libres de 10</DateInfo>
                    </DateOptionsDescription>

                    <SelectOption
                      to={{
                        pathname: `${history.location.pathname}/reservar`,
                        data: {
                          post,
                          date,
                          startTimeValue,
                          endTimeValue
                        }
                      }}
                      onClick={handleBooking}
                    >
                      Reservar
                    </SelectOption>
                  </DateOptions>
                </React.Fragment>
              ) : (
                <DateInfo style={{ paddingTop: "32px" }}>
                  No se encontró disponibilidad. Intenta probando otra fecha
                </DateInfo>
              )}
            </React.Fragment>
          ))}
      </Grid.Column>
    </Grid>
    <Divider style={{ margin: "24px 0" }} />
  </Box>
);

export default withRouter(Availability);
