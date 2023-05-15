import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_new_task } from "../redux/actions";

export default function Form() {
  const [task, setTask] = useState("");
  const [id, setId] = useState("");
  let editTask = useSelector((state) => state.todos.editTask);

  const dispatch = useDispatch();
  useEffect(() => {
    setTask(editTask.task);
    setId(editTask.id);
  }, [editTask]);
  return (
    <div>
      <input
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(add_new_task(task));
          setTask("");
        }}
      >
        {id ? "Update" : "Add"}
      </button>
    </div>
  );
}
