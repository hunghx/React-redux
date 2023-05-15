import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function ListTodo() {
  let listTodos = useSelector((state) => state.todos.listTask);
  return (
    <div>
      <h1>Danh sách công việc</h1>
      <table
        style={{ width: "60%", margin: "0 auto" }}
        border={1}
        cellSpacing={0}
        cellPadding={10}
      >
        <thead>
          <tr>
            <td>STT</td>
            <td>Task</td>
            <td colSpan={2}>Action</td>
          </tr>
        </thead>
        <tbody>
          {listTodos.map((todo, index) => (
            <Todo key={todo.id} todo={todo} stt={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
