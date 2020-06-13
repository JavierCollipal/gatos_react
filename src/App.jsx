import React from "react";
import "./App.css";
import Cats from "./components/cats/Cats";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NabVar from "./components/ui/NabVar";
import Container from "@material-ui/core/Container";

const appTitle = "Cat Apps";

function App() {
  return (
    <div className="App">
      <NabVar title={appTitle} />
      <div>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cats">
              <Cats />
            </Route>
          </Switch>
        </Container>
      </div>
    </div>
  );
}

export default App;
