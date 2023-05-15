export const add_1 = () => ({
  type: "ADD_1",
});
export const add_2 = () => {
  return {
    type: "ADD_2",
  };
};
export const add_3 = () => {
  return {
    type: "ADD_3",
  };
};
export const add_4 = () => {
  return {
    type: "ADD_4",
  };
};

// task
export const add_new_task = (task) => ({
  type: "ADD_TASK",
  payload: task,
});
export const delete_task = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
export const edit_task = (editTask) => ({
  type: "EDIT_TASK",
  payload: editTask,
});
