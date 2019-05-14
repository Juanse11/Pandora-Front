import React from "react";
import FiltersList from "./FiltersList";
import SportFilter from "../SportFIlter/Container"
import DateFilter from '../DateFilter/Container'
import RatingFilter from '../RatingFilter/Container'
import PriceFilter from '../PriceFilter/Container'
// import SortFilter from '../SortFilter/Container'
// import TypeFilter from '../TypeFilter/Container'


export default class FiltersListContainer extends React.Component {
  state = {
    filters: [
      {
        name: "Fecha",
        component: <DateFilter />
      },
      {
        name: "Deporte",
        component: <SportFilter />
      },
      {
        name: "Calificacion",
        component: <RatingFilter />
      },{
        name: "Precio",
        component: <PriceFilter />
      },{
        name: "Tipo de Superficie",
        component: <RatingFilter />
      },{
        name: "Orden",
        component: <RatingFilter />
      }
    ]
  };

  render() {
    return <FiltersList filters={this.state.filters} />;
  }
}
