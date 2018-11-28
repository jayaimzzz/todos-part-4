import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route} from "react-router-dom";
// import TodoList from "./compontents/TodoList";
import { Provider } from "react-redux";
import { reducer } from "./reducer.js";
import { createStore } from "redux";

const store = createStore(
    reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const routing = (
  <BrowserRouter>
    <Provider store={store}>
      <Route render={(props)=><App pathname={props.location.pathname}/>}/>
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
