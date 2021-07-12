import React, { Component } from "react";
import Details from "../detailsComponent/details";
import ActivitiesResult from "../activitiesResultComponents/activities-result";
import { Grid, Box } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./main-page.scss";
import { Block } from "@material-ui/icons";

class MainPage extends Component {
  render() {
    const {
      classes,
      //error, randomActivity
    } = this.props;
    // const display = error || randomActivity.activity ? "block" : "none";

    return (
      <Grid container justifyContent="center" item>
        <Grid
          item
          className={classes.activity}
          // component={Box}
          // display={{
          //   xs: display,
          //   sm: display,
          //   md: "block",
          // }}
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainPage);
