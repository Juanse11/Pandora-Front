import React from "react";
import SportFilter from "./SportFilter";

export default class SportFilterContainer extends React.Component {
  state = {
    sportFilter: {
      futbol: undefined,
      tenis: undefined,
      beisbol: undefined,
      basquetbol: undefined,
      boxeo: undefined,
      yoga: undefined
    }
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.checked;
    this.setState(() => ({ [field]: value }));
  }

  render() {
    return <SportFilter onChange={this.onChange} />;
  }
}
