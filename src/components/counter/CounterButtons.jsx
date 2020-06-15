import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

const CounterButtons = ({ increment, decrement }) => {
  console.log(increment);
  console.log(decrement);
  return (
    <Box>
      <Button onClick={increment}>Incrementar</Button>
      <Button onClick={decrement}>Incrementar</Button>
    </Box>
  );
};

export default CounterButtons;
