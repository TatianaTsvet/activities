import React, { Component } from "react";
import Details from "../detailsComponent/details";
import Header from "../header";
import ActivitiesResult from "../activities-result";
import MyList from "../my-list";
import SuccessToast from "../serviceComponent/success-toast";
import ErrorComponent from "../serviceComponent/error-component";
import RepeatedActivityToast from "../serviceComponent/repeated-activity-toast";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./app.scss";

const styles = (theme) => ({
  root: {
    background: "#37474f",
    color: "white",
    margin: "2em auto",
    textTransform: "uppercase",
  },
  activity: {
    background: "#546e7a",
    marginBottom: "1em",
  },
  details: {
    background: "#78909c",
    marginBottom: "1em",
  },
});

class App extends Component {
  render() {
    const { classes, activity } = this.props;
    return (
      <BrowserRouter>
        <Container
          justify="center"
          component="main"
          maxWidth="md"
          className={classes.root}
        >
          {/* <Header /> */}
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

                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <SuccessToast />
                  <RepeatedActivityToast />
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
        </Container>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
