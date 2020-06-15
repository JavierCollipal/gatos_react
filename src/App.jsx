import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NabVar from "./components/ui/NabVar";
import Container from "@material-ui/core/Container";
import Loadable from "react-loadable";

//llevar esto a otro folder
const Loader = (x) =>
  Loadable({
    loading: () => "Cargando...",
    loader: x,
  });
//aca añadir dotenv
const appTitle = "Cat Apps";

const Home = Loader(() => import("./components/home/Home"));
const Cats = Loader(() => import("./components/cats/Cats"));
const Counter = Loader(() => import("./components/counter/Counter"));
function App() {
  // eslint-disable-next-line
  return (
    <div className="App">
      <NabVar title={appTitle} />
      <div>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cats" component={Cats} />
            <Route exact path="/counter" component={Counter} />
          </Switch>
        </Container>
      </div>
    </div>
  );
}
export default App;
