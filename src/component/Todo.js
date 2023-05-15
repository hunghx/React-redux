import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, edit_task } from "../redux/actions";

export default function Todo({ todo, stt }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{stt}</td>
      <td>{todo.task}</td>
      <td>
        <button onClick={() => dispatch(edit_task(todo))}>Sửa</button>
      </td>
      <td>
        <button
          onClick={() => {
            if (!window.confirm("bạn có chăc schawn muốn xoá ko")) {
              return;
            }
            dispatch(delete_task(todo.id));
          }}
        >
          Xoá
        </button>
      </td>
    </tr>
  );
}
