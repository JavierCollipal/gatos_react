import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NabVar from "./components/ui/NabVar";
import Container from "@material-ui/core/Container";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { increment, decrement, setter } from "./reducers";
import Counter from "./components/counter/Counter";

const Loader = (x) =>
  Loadable({
    loading: () => "Cargando...",
    loader: x,
  });
const appTitle = "Cat Apps";

const Home = Loader(() => import("./components/home/Home"));
const Cats = Loader(() => import("./components/cats/Cats"));
function App(props) {
  // eslint-disable-next-line
  const { counter, increment, decrement, setter } = props;
  return (
    <div className="App">
      <NabVar title={appTitle} />
      <div>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cats" component={Cats} />
          </Switch>
        </Container>
      </div>
      <div>
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </div>
  );
}

//esta funcion se encarga de pasar el estado de la store como props de componentes
//y esto se logra creando una funcion que devuelve un objeto
const mapStateToProps = (state) => {
  console.log(`este es el estado de mapStateToProps ${state}`);
  return { counter: state };
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
