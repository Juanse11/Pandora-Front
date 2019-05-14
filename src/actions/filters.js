export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
export const sortByAmount = (sortBy = "amount") => ({
  type: "SORT_BY_AMOUNT",
  sortBy
});
export const sortByDate = (sortBy = "date") => ({
  type: "SORT_BY_DATE",
  sortBy
});
export const setDate = date => ({ type: "SET_DATE", date });
export const setRating = rating => ({ type: "SET_RATING", rating });
export const setMinimumPrice = price => ({ type: "SET_MINIMUM_PRICE", price });
export const setMaximumPrice = price => ({ type: "SET_MAXIMUM_PRICE", price });
export const setSportsFilter = sports => ({ type: "SET_SPORTS_FILTER", sports});
export const setSurfacesFilter = surfaces => ({ type: "SET_SURFACES_FILTER", surfaces});
