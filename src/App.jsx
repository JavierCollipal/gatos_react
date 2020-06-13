import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NabVar from "./components/ui/NabVar";
import Container from "@material-ui/core/Container";
import Loadable from "react-loadable";

const Loader = (x) =>
  Loadable({
    loading: () => "Cargando...",
    loader: x,
  });
const appTitle = "Cat Apps";

const Home = Loader(() => import("./components/home/Home"));
const Cats = Loader(() => import("./components/cats/Cats"));
function App() {
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
    </div>
  );
}

export default App;
