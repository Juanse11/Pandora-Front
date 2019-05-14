import React from "react";
import PriceFilter from "./PriceFilter";
import { connect } from "react-redux";
import { setMaximumPrice, setMinimumPrice } from "../../../../actions/filters";

class PriceFilterContainer extends React.Component {
  state = {
    minimum: undefined,
    maximum: undefined,
    name: "Precio",
    isActive: false
  };

  formatMoney = number => {
    return number.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0
    });
  };
  onChange = async (e, data) => {
    const field = data.name;
    const value = Number(data.value);
    await this.setState(() => ({ [field]: value }));
    this.handleActiveFilter();
  };

  handleApplyChanges = () => {
    this.props.setMaximumPrice(
      this.state.maximum === 0 ? undefined : this.state.maximum
    );
    this.props.setMinimumPrice(
      this.state.minimum === 0 ? undefined : this.state.minimum
    );
  };

  handleActiveFilter = () => {
    let name = "Precio";
    let isActive = false;
    if (this.state.minimum && this.state.maximum) {
      name = `$${this.formatMoney(this.state.minimum).slice(
        2
      )} COP - $${this.formatMoney(this.state.maximum).slice(2)} COP`;
      isActive = true;
    } else if (this.state.minimum) {
      name = `Desde $${this.formatMoney(this.state.minimum).slice(2)} COP`;
      isActive = true;
    } else if (this.state.maximum) {
      name = `Hasta $${this.formatMoney(this.state.maximum).slice(2)} COP`;
      isActive = true;
    }

    if (this.state.name !== name) {
      this.setState({ name, isActive });
    }
  };

  render() {
    return (
      <PriceFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        isOpen={this.state.isOpen}
        name={this.state.name}
        isActive={this.state.isActive}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMaximumPrice: price => {
      dispatch(setMaximumPrice(price));
    },
    setMinimumPrice: price => {
      dispatch(setMinimumPrice(price));
    }
  };
};

const mapStateToProps = ({ filters: { price } }) => {
  return {
    price
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFilterContainer);
