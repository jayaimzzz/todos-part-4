import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import TodoList from "./compontents/TodoList";
import { Provider, connect } from 'react-redux'
import { reducer } from "./reducer.js";
import { createStore, combineReducers, applyMiddleware } from 'redux'

const store = createStore(reducer);
const routing = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
