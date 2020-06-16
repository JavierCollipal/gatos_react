import React from "react";
import { Box } from "@material-ui/core";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import { connect } from "react-redux";
import { decrement, increment, setter } from "../../reducers/counter";
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
//Ver donde podemos llevar estas dos functionez
//esta funcion se encarga de pasar el estado de la store como props de componentes
//y esto se logra creando una funcion que devuelve un objeto
const mapStateToProps = (state) => {
  const { counter } = state;
  return { counter };
};

//esta funcion se encarga de pasar las acciones de la store como props de componentes
//y esto se logra creando una funcion que devuelve un objeto
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  //un setter seria el equivalente a una mutaction en vue
  setter: (payload) => dispatch(setter()),
});
//connect es una funcion curryng que se encarga de devolver a app pero con los estados y acciones mapeados
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
