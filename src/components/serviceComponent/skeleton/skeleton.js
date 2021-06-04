import React, { Component } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {  Grid } from "@material-ui/core";

import "./skeleton.scss";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "white",
    height: "11rem",

    marginBottom: "1em",
    padding: "1em",
  },
});

class SkeletonInList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        item
        className={classes.root}
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Skeleton variant="rect" height={140}></Skeleton>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SkeletonInList);
