/*//var React = require("react");
//var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

const number = 9 * 7;
const fName = "Kachi";
const lName = "Flavian";

ReactDOM.render(
  <div>
    <h1>My Favorite Foods!</h1>
    <p>
      <ul>
        <li>Bacon </li>
        <li>Vegetable soup </li>
        <li>Fried Rice </li>
      </ul>
    </p>
    <h1> My Lucky Number is {number} </h1>
    <h1> My best number is {Math.floor(Math.random() * number) + 1} </h1>
    <h1>
      My Name is {fName} {lName}{" "}
    </h1>
    <h1>My Name is {fName + " " + lName}</h1>
  </div>,
  document.getElementById("root")
);*/

import React from "react";
import ReactDom from "react-dom";

const name = "Kachi";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDom.render(
  <div>
    <h1>
      <p>Hello! the page is created By: {name}</p>
      <p>Copyright {year}.</p>
    </h1>
  </div>,
  document.getElementById("root")
);
