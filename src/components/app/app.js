import React, { Component } from "react";
import MainPage from "../mainPageComponent/main-page";

import MyList from "../myListComponents/my-list";
import ErrorComponent from "../../core/components/error-component";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import { Grid, Box, Tab, AppBar, Tabs } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./app.scss";
import mainPage from "../mainPageComponent/main-page";

function TabPanel(props) {
  const { children, value, index } = props;

  return <> {value === index && children}</>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

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
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="on"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Activity" component={Link} to={"/activities"} />
              <Tab label="My List" component={Link} to={"/mylist"} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <MainPage
              randomActivity={this.props.randomActivity}
              error={this.props.error}
            />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <MyList />
          </TabPanel>

          <Switch>
            <Route path="/" component={mainPage}>
              <Redirect to="/activity" />
            </Route>
            <Route path="/mylist" component={MyList}>
              <Redirect to="/mylist" />
            </Route>
            <Route path="/error" component={ErrorComponent} exact>
              <Redirect from="*" to="/error" />
            </Route>
          </Switch>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
