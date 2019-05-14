import React from "react";
import styled from "styled-components";
import { Container, Grid, Divider, Dropdown, Button } from "semantic-ui-react";

import CardSummary from "./CardSummary";
import PaymentMethod from "./PaymentMethod";

const StyledContainer = styled(Container)`
  &&&&&&&&&&& {
    max-width: 1080px !important;
    padding: 0 18px;
    padding-bottom: 96px;
    margin-top: 32px;
  }
`;

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 32px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const StyledDropdown = styled(Dropdown)`
  max-width: 200px;
`;

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  }
];

const Pay = styled(Button)`
  &&& {
    align-self: center;
    border: 2px solid #483df6;
    background: #483df6;
    padding: 10px 22px;
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

const Content = ({ post, date, startTimeValue, endTimeValue }) => (
  <React.Fragment>
    <StyledContainer>
      <Grid
        style={{
          margin: 0,
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Grid.Column mobile={16} computer={8}>
          <Title>Revisar y pagar</Title>
          <PaymentMethod />

          <form
            method="post"
            action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
          >
            <input name="merchantId" type="hidden" value="508029" />
            <input name="accountId" type="hidden" value="512321" />
            <input name="description" type="hidden" value="Pandora" />
            <input name="referenceCode" type="hidden" value="PAGO001" />
            <input name="amount" type="hidden" value={20000} />
            <input name="tax" type="hidden" value="0" />
            <input name="taxReturnBase" type="hidden" value="0" />
            <input name="currency" type="hidden" value="COP" />
            <input
              name="signature"
              type="hidden"
              value="89d4afeff33c6f1e10dd594d4655bc49"
            />
            <input name="test" type="hidden" value="1" />
            <input name="buyerEmail" type="hidden" value="pandora@test.com" />
            <input
              name="responseUrl"
              type="hidden"
              value="http://localhost:3000/buscar"
            />
            <input
              name="confirmationUrl"
              type="hidden"
              value="http://localhost:8000/v1/payments"
            />
            <Pay>Reservar y pagar</Pay>
          </form>
        </Grid.Column>
        <Grid.Column
          computer={6}
          mobile={16}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 0
          }}
        >
          <CardSummary
            post={post}
            date={date}
            startTimeValue={startTimeValue}
            endTimeValue={endTimeValue}
          />
        </Grid.Column>
      </Grid>
      <Divider style={{ margin: "24px 0" }} />
    </StyledContainer>
  </React.Fragment>
);

export default Content;
