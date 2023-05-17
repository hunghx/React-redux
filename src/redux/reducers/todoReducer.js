const initState = {
  listTask: [
    { id: 1, task: "đi học" },
    { id: 2, task: "đi ngủ" },
    { id: 3, task: "đi chơi" },
  ],
  editTask: { id: "", task: "" },
  search: "",
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      let id =
        state.listTask.length === 0
          ? 1
          : state.listTask[state.listTask.length - 1].id + 1;
      state = {
        ...state,
        listTask: [...state.listTask, { id, task: action.payload }],
      };
      return state;
    case "DELETE_TASK":
      let listUpdate = state.listTask.filter(
        (task) => task.id !== action.payload
      );
      state = { ...state, listTask: listUpdate };
      return state;
    case "EDIT_TASK":
      state = { ...state, editTask: action.payload };
      return state;
    case "UPDATE_TASK":
      let updateList = state.listTask.map((task) => {
        if (task.id == action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
      state = { ...state, listTask: [...updateList] };
      return state;
    case "SEARCH_TASK":
      state = { ...state, search: action.payload };
      return state;
    default:
      return state;
  }
};

export default todoReducer;
