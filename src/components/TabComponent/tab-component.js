import React, { Component } from "react";
import MainPage from "../mainPageComponent/mainPage/main-page";
import MyList from "../myListComponents/my-list";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Grid, Tab, AppBar, Tabs } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./tab-component.scss";

const allTabs = ["/activities", "/list"];

class TabComponent extends Component {
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
                  <AppBar position="static" className={classes.appBar}>
                    <Tabs
                      variant="scrollable"
                      scrollButtons="on"
                      aria-label="scrollable force tabs example"
                      value={location.pathname}
                    >
                      <Tab
                        label="Activity"
                        value="/activities"
                        component={Link}
                        to={allTabs[0]}
                      />
                      <Tab
                        label="My List"
                        value="/list"
                        component={Link}
                        to={allTabs[1]}
                      />
                    </Tabs>
                  </AppBar>
                  <Switch>
                    <Route path={allTabs[1]} render={() => <MyList />} />
                    <Route
                      path={allTabs[0]}
                      render={() => <MainPage />}
                    ></Route>
                  </Switch>
                </>
              )}
            />
          </Grid>
        </BrowserRouter>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TabComponent);
