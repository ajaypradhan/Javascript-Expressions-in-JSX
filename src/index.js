import React from "react";
import ReactDOM from "react-dom";
const name = "Ajay";
const luckyNo = "2";
ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>My lucky no is {luckyNo}</p>
  </div>,
  document.getElementById("root")
);
