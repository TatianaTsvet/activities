import React, { Component } from "react";
import Details from "../detailsComponent/details";
import Header from "../header";
import ActivitiesResult from "../activitiesResultComponents/activities-result";
import MyList from "../myListComponents/my-list";
import ErrorComponent from "../../core/components/error-component";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activityResultVisibility: "none" };
  }

  componentDidUpdate() {
    const { error, randomActivity } = this.props;
    // if (error || randomActivity.activity) {
    //   this.setState({
    //     activityResultVisibility: "block",
    //   });
    // }
    //
    // const newVisibility = error || randomActivity.activity ? "block" : "none";
    // this.setState({
    //   activityResultVisibility: newVisibility,
    // });
  }
  render() {
    const { classes } = this.props;
    const { error, randomActivity } = this.props;
    const { activityResultVisibility } = this.state;

    return (
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
          <Switch>
            <Route path="/activities/" exact>
              <Header />
              <Grid container justifyContent="center" item>
                <Grid
                  item
                  className={classes.activity}
                  // component={Box}
                  // display={
                  //   {
                      //xs: error || randomActivity.activity ? "block" : "none",
                      //xs: activityResultVisibility,
                      //sm: error || randomActivity.activity ? "block" : "none",
                      //sm: activityResultVisibility,
                  //   }
                  // }
                  xs={12}
                  sm={6}
                >
                  <ActivitiesResult />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  direction="column"
                  alignItems="stretch"
                  className={classes.details}
                  xs={12}
                  sm={6}
                >
                  <Details />
                </Grid>
              </Grid>
            </Route>
            <Route path="/mylist/" exact>
              <Header />
              <Grid
                className={classes.myList}
                container
                direction="column"
                justifyContent="space-around"
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
