const initState = {
  number: 10,
  message: "helo",
};
const countReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_1":
      state = { ...state, number: state.number + 1 };
      return state;
    case "ADD_2":
      state = { ...state, number: state.number + 2 };
      return state;
    case "ADD_3":
      state = { ...state, number: state.number + 3 };
      return state;
    case "ADD_4":
      state = { ...state, number: state.number + 4 };
      return state;
    default:
      return state;
  }
};
export default countReducer;
