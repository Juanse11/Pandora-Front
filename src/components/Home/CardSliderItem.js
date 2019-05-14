import React from "react";
import { Card } from "semantic-ui-react";


const CardSliderItem = ({ picture }) => (
  <Card
    style={{
        padding: "0em",
        minHeight: 240,
        maxWidth: 195,
        backgroundImage: `url(${picture})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80% 80%",
        backgroundColor: 'transparent',
        boxShadow: 'none',
        textAlign: "center"
      }}
    href="#card-example-link-card"
  >
  </Card>
);

export default CardSliderItem;
