import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";

import "./my-list-reset-button.scss";

export default class MyListResetButton extends Component {
  render() {
    const { activity, loading } = this.props;

    if (activity.length === 0) {
      return null;
    }

    return loading ? null : (
      <Grid container direction="row" justifyContent="center">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={this.props.resetActivities}
        >
          Clear all
        </Button>
      </Grid>
    );
  }
}
