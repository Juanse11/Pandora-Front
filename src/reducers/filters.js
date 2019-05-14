const filtersReducerDefaultState = {
  text: undefined,
  sortBy: "",
  sports: [],
  surfaces: [],
  rating: undefined,
  date: undefined,
  price: {
    minimum: 0
  }
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "SET_SPORTS_FILTER":
      return {
        ...state,
        sports: action.sports
      };
    case "SET_RATING":
      return {
        ...state,
        rating: action.rating
      };
    case "SET_SURFACES_FILTER":
      return {
        ...state,
        surfaces: action.surfaces
      };
    case "SET_MINIMUM_PRICE":
      return {
        ...state,
        price: {
          ...state.price,
          minimum: action.price
        }
      };
    case "SET_MAXIMUM_PRICE":
      return {
        ...state,
        price: {
          ...state.price,
          maximum: action.price
        }
      };
    default:
      return state;
  }
};

export default filtersReducer;
