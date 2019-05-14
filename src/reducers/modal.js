const modalReducerDefaultState = {
    isDimmed: false
  };
  const modalReducer = (state = modalReducerDefaultState, action) => {
    switch (action.type) {
      
      case "SET_DIMMER":
        return {
          ...state,
          isDimmed: !state.isDimmed
        };
      default:
        return state;
    }
  };
  
  export default modalReducer;
  