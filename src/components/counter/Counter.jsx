import React from "react";
import { Box } from "@material-ui/core";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
//Aqui vamos a mover la store de counter
//de alguna forma tenemos que lograr que la store de counter se declare en este lado
//para esto podemos apoyarnos de react-redux y connect
const Counter = ({ counter, increment, decrement }) => {
  return (
    <Box>
      <CounterDisplay counter={counter} />
      <CounterButtons increment={increment} decrement={decrement} />
    </Box>
  );
};

export default Counter;
