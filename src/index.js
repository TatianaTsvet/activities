import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app/";
import { Provider } from "react-redux";
import store from "./saga/store/store";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
