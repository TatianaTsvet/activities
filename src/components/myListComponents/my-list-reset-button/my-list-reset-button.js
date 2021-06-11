import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";

import "./my-list-reset-button.scss";

export default class MyListResetButton extends Component {
  resetActivities = () => {
    this.props.resetActivities();
  };
  render() {
    const { activity, skeletonLoading } = this.props;

    if (activity.length === 0) {
      return null;
    }

    return skeletonLoading? null : (
      <Grid container direction="row" justify="center">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={this.resetActivities}
        >
          Clear all
        </Button>
      </Grid>
    );
  }
}
