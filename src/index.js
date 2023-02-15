import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App/index";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducers/reducer";
import config from "./config";
import authReducer from "./store/reducers/register.reducers";

const baseReducer = combineReducers({
  utilityReducer: reducer,
  authReducer: authReducer,
});

const store = createStore(baseReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      {/* basename="/datta-able" */}
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
