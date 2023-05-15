import React from "react";
import { useDispatch } from "react-redux";
import { add_1, add_2, add_3, add_4 } from "../redux/actions";

export default function GroupBtn() {
  // gửi action đi
  const dispatch = useDispatch();
  // tăng lên 1 đơn vị
  const handleIncrease1 = () => {
    dispatch({
      type: "ADD_1",
    });
  };
  return (
    <div>
      <button onClick={handleIncrease1}>Tăng 1</button>
      <button onClick={() => dispatch(add_2())}>Tăng 2</button>
      <button onClick={() => dispatch(add_3())}>Tăng 3</button>
      <button onClick={() => dispatch(add_4())}>Tăng 4</button>
    </div>
  );
}
