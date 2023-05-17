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
export const update_task = (newTask) => ({
  type: "UPDATE_TASK",
  payload: newTask,
});

export const search_task = (search) => ({
  type: "SEARCH_TASK",
  payload: search,
});

//  carrt
export const add_to_cart = (cartItem) => ({
  type: "ADDTOCART",
  payload: cartItem,
});
export const change_quantity = (id, quantity) => ({
  type: "CHANGEQUANTITY",
  payload: { id, quantity },
});
export const delete_cart = (id) => ({
  type: "DELETEITEM",
  payload: id,
});
