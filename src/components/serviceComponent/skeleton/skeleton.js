import React, { Component } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import "./skeleton.scss";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "white",
    height: "11rem",
    width: "100%",
    marginBottom: "1em",
    padding: "1em",
  },
});

class SkeletonInList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Skeleton variant="text" />
        <Skeleton variant="rect" height={140}></Skeleton>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SkeletonInList);
