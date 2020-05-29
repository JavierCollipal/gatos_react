import React from "react";

const combos = [
  "Uno",
  "Dos",
  "Tres",
  "Cuatro",
  "Cinco",
];
const comboList = combos.map((number, index) => <p key={index}>{number}</p>);

const ArrayRendering = () => comboList;

export default ArrayRendering;
