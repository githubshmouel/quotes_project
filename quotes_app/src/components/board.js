import React from "react";
import Row from "./row";
const Board = (props) => {
  const data = props.data;

  const arraysData = [];
  let array = [];

  data.forEach(item => {
    if (array.length < 3) {
      array.push(item)
    } else {
      array.push(item);
      arraysData.push(array);
      array = [];
    }
  });
  arraysData.push(array);
  console.log(arraysData);

  return (
    <div>
      {arraysData.map((array, index) => {
        return <Row key={index} data={array} />;
      })}
    </div>
  );
};

export default Board;
