import React from "react";
import TypeFilter from "./TypeFilter";
import { connect } from "react-redux";
import { setSurfacesFilter } from "../../../../actions/filters";

class TypeFilterContainer extends React.Component {
  state = {
    types: {
      sintetico: {
        name: "Grama sintética",
        isChecked: undefined
      },
      natural: {
        name: "Grama natural",
        isChecked: undefined
      },
      arena: {
        name: "Arena",
        isChecked: undefined
      },
      concreto: {
        name: "Concreto",
        isChecked: undefined
      }
    },
    name: "Tipo de terreno",
    isActive: false
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.checked;
    console.log(this.state.types);
    this.setState(({ types }) => {
      const newTypes = { ...types };
      newTypes[field].isChecked = value;
      return {
        types: newTypes
      };
    });
  };

  handleApplyChanges = () => {
    let name = "Tipo de terreno";
    let isActive = false;
    const typesSelected = Object.keys(this.state.types).filter(
      type => this.state.types[type].isChecked
    );

    if (typesSelected.length === 1) {
      name = `${typesSelected[0][0].toUpperCase()}${typesSelected[0].slice(1)}`;
      isActive = true;
    } else if (typesSelected.length > 1) {
      name = `Tipos de terreno · ${typesSelected.length}`;
      isActive = true;
    }
    this.props.setSurfacesFilter(typesSelected)
    this.setState({ name, isActive });
  };

  render() {
    return (
      <TypeFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        {...this.state}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSurfacesFilter: surfaces => {
      dispatch(setSurfacesFilter(surfaces));
    }
  };
};

const mapStateToProps = ({ filters: { surfaces } }) => {
  return {
    surfaces
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeFilterContainer);
