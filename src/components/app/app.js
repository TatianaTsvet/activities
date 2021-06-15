import React, { Component } from "react";
import Details from "../detailsComponent/details";
import Header from "../header";
import ActivitiesResult from "../activitiesResultComponents/activities-result";
import MyList from "../myListComponents/my-list";
import ErrorComponent from "../../core/components/error-component";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./app.scss";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <Grid
          container
          item
          xs={11}
          sm={10}
          lg={8}
          justify="flex-start"
          className={classes.root}
        >
          <Switch>
            <Route path="/activities/" exact>
              <Header />
              <Grid container spacing={3} justify="center">
                <Grid item className={classes.activity} xs={10} sm={6}>
                  <ActivitiesResult />
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="stretch"
                  className={classes.details}
                  xs={10}
                  sm={6}
                >
                  <Details />
                </Grid>
              </Grid>
            </Route>
            <Route path="/mylist/" exact>
              <Header />
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="stretch"
              >
                <MyList />
              </Grid>
            </Route>
            <Route path="/error" component={ErrorComponent} exact />

            <Route path="/" exact>
              <Redirect to="/activities" />
            </Route>
            <Redirect to="/error" />
          </Switch>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
