import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  // lấy ra giá trị state trong store
  let number = useSelector((state) => state.count.number);
  return (
    <div>
      <span>{number}</span>
    </div>
  );
}
