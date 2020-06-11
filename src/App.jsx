import React from 'react';
import './App.css';
import Title from "./components/concepts/Title";
import Cats from "./components/cats/Cats";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="App">
        <Title name="Cat Apps"/>
        <div>
            <Router>

                <Link to="/cats">cats</Link>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cats">
                        <Cats />
                    </Route>
                </Switch>

            </Router>
        </div>

    </div>
  );
}

export default App;
