import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

const CounterButtons = ({ increment, decrement }) => {
  return (
    <Box>
      <Button onClick={increment} id="incrementButton">
        Incrementar
      </Button>
      <Button onClick={decrement} id="decrementButton">
        Disminuir
      </Button>
    </Box>
  );
};

export default CounterButtons;
