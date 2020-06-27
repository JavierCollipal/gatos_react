import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NabVar from "./components/ui/NabVar";
import loadable from "@loadable/component";

//aca añadir dotenv
const appTitle = "Cat Apps";

const Home = loadable(() => import("./components/home/Home"));
const Cats = loadable(() => import("./components/cats/Cats"));
const Counter = loadable(() => import("./components/counter/Counter"));
function App() {
  return (
    <div className="App">
      <NabVar title={appTitle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </div>
  );
}
export default App;
