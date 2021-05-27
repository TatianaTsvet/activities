import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app/";
import { Provider } from "react-redux";
import store from "./saga/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
