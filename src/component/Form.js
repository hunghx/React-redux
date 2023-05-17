import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_new_task, search_task, update_task } from "../redux/actions";

export default function Form() {
  const [task, setTask] = useState("");
  const [searcg, setSearch] = useState("");

  const [id, setId] = useState("");
  let editTask = useSelector((state) => state.todos.editTask);

  const dispatch = useDispatch();
  useEffect(() => {
    setTask(editTask.task);
    setId(editTask.id);
  }, [editTask]);
  const handleSubmit = () => {
    if (id) {
      // update
      dispatch(update_task({ id, task }));
      setId("");
    } else {
      //add
      dispatch(add_new_task(task));
    }
    setTask("");
  };
  const handleSearch = () => {
    dispatch(search_task(searcg));
  };
  return (
    <div>
      <input
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>{id ? "Update" : "Add"}</button>
      <br></br>
      <input
        value={searcg}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
