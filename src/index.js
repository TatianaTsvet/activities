import "babel-polyfill";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "intersection-observer";
import "intersection-observer-polyfill";
import "core-js/features/string/repeat";
import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import "abortcontroller-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/";
import { Provider } from "react-redux";

import store from "./saga/store/store";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
