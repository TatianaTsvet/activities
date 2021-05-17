import React, { Component } from "react";
import Details from "../details";
import Header from "../header";
import ActivitiesResult from "../activities-result";
import MyList from "../my-list";
import SuccessToast from "../success-toast";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./app.scss";

const storageKey = "somekey";

const styles = (theme) => ({
  root: {
    background: "#37474f",
    color: "white",
    margin: "2em auto",
  },
  activity: {
    background: "#546e7a",
  },
  details: {
    background: "#78909c",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
      randomActivity: null,
      error: false,
      success: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    const { activity } = this.state;
    localStorage.setItem(storageKey, JSON.stringify(activity));
  }

  onActivityFetched = (data) => {
    if (data.error) {
      this.setState({ error: data.error });
    }
    this.setState({
      randomActivity: { ...data },
      loading: false,
    });
  };
  sendToMyList = (rightActivity) => {
    this.setState({ rightActivity });
  };
  addItem = (randomActivity) => {
    let newItem = {
      type: randomActivity.type,
      participants: randomActivity.participants,
      activity: randomActivity.activity,
      key: randomActivity.key,
    };

    const sameActivity = !!this.state.activity.find(
      (item) => item.key === newItem.key
    );

    if (sameActivity) return;

    this.setState({ activity: [...this.state.activity, newItem] });
  };
  deleteItem = (key) => {
    this.setState({
      activity: this.state.activity.filter((item) => key !== item.key),
    });
  };
  setShow = (success) => {
    this.setState({ success });
  };
  closeToast = (success) => {
    this.setState({ success });
  };
  changeError = (error) => {
    this.setState({ error });
  };
  switchSpinner = (loading) => {
    this.setState({ loading });
  };
  render() {
    const { activity, randomActivity, success, error, loading } = this.state;
    const { classes } = this.props;
    return (
      <Router>
        <Container
          justify="center"
          component="main"
          maxWidth="md"
          className={classes.root}
        >
          <Header />
          <Switch>
            <Route path="/activities" exact>
              <Grid container spacing={3} justify="center">
                <Grid item className={classes.activity} xs={10} sm={6}>
                  <ActivitiesResult
                    randomActivity={randomActivity}
                    sendToMyList={this.sendToMyList}
                    addItem={this.addItem}
                    setShow={this.setShow}
                    error={error}
                  />
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  className={classes.details}
                  xs={10}
                  sm={6}
                >
                  <Details
                    onActivityFetched={this.onActivityFetched}
                    changeError={this.changeError}
                    loading={loading}
                    switchSpinner={this.switchSpinner}
                  />
                </Grid>

                <Grid item>
                  <SuccessToast
                    success={success}
                    closeToast={this.closeToast}
                  />
                </Grid>
              </Grid>
            </Route>
            <Route path="/mylist" exact>
              <Grid container spacing={2} justify="center">
                <MyList activity={activity} deleteItem={this.deleteItem} />
              </Grid>
            </Route>
            <Route path="">
              <Redirect to="/activities" />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
