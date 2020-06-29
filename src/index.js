import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counter";
import catReducer from "./reducers/cats";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
//Si queremos usar 2 o mas reducers, podemos lograrlo con esta funcion llamada combineReducers
//Con esta funcion crearemos un objeto que tendra como propiedades a mas reducers disponibles
const reducer = combineReducers({
  counter: counterReducer,
  cats: catReducer,
  form: formReducer,
});
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
