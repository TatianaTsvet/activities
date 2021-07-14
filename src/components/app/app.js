import React, { Component } from "react";
import MainPage from "../mainPageComponent/main-page";

import MyList from "../myListComponents/my-list";
import ErrorComponent from "../../core/components/error-component";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import { Grid, Tab, AppBar, Tabs } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./app.scss";

const allTabs = ["/", "/mylist"];
class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <BrowserRouter>
          <Grid
            container
            item
            xs={12}
            sm={12}
            lg={8}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.root}
          >
            <Route
              path="/"
              render={({ location }) => (
                <>
                  <AppBar position="static">
                    <Tabs
                      variant="scrollable"
                      scrollButtons="on"
                      aria-label="scrollable force tabs example"
                      value={location.pathname}
                    >
                      <Tab
                        label="Activity"
                        value="/"
                        component={Link}
                        to={allTabs[0]}
                      />
                      <Tab
                        label="My List"
                        value="/mylist"
                        component={Link}
                        to={allTabs[1]}
                      />
                    </Tabs>
                  </AppBar>
                  <Switch>
                    <Route path={allTabs[1]} render={() => <MyList />} />
                    <Route
                      path={allTabs[0]}
                      render={() => (
                        <MainPage
                          randomActivity={this.props.randomActivity}
                          error={this.props.error}
                        />
                      )}
                    ></Route>
                    <Route path="/error" component={ErrorComponent} exact />
                    <Redirect to="/error" />

                    <Redirect from="/" to="/activities" />
                  </Switch>
                </>
              )}
            />
            {/* <Switch>
              <Route path="/error" component={ErrorComponent} exact />

              <Route path="/">
                <Redirect to="/activities" />
              </Route>
              <Redirect to="/error" />
            </Switch> */}
          </Grid>
        </BrowserRouter>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
