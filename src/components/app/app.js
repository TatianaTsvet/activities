import React, { Component } from "react";
import TabComponent from "../TabComponent/tab-component";
import ErrorComponent from "../../core/components/error-component";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import "./app.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/activities" exact component={TabComponent} />
            <Route path="/error" component={ErrorComponent} exact />
            <Route path="/list" component={TabComponent} exact />
            <Route path="/" exact>
              <Redirect to="/activities" />
            </Route>

            <Redirect to="/error" />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
