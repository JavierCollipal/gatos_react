import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NabVar from "./components/ui/NabVar";
import Container from "@material-ui/core/Container";
import Loader from "./libraries/loadable";

//aca añadir dotenv
const appTitle = "Cat Apps";

const Home = Loader(() => import("./components/home/Home"));
const Cats = Loader(() => import("./components/cats/Cats"));
const Counter = Loader(() => import("./components/counter/Counter"));
function App() {
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
