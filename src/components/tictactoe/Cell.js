import React from "react";

// const student = {
//   name: "Evondev",
//   age: 28,
// };
// const name = student.name;
// const age = student.age;
// const {name, age } = student;

const Cell = (props) => {
  //   const { value, onClick } = props;
  return (
    <div className={`game-cell ${props.className}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
