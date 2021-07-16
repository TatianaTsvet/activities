import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ResetButton from "../../../core/components/reset-button";
import "./my-list-reset-button.scss";

export default class MyListResetButton extends Component {
  render() {
    const { activity, loading } = this.props;

    if (activity.length === 0) {
      return null;
    }

    return loading ? null : (
      <Grid container direction="row" justify="center">
        <ResetButton
          name="Clear all"
          resetDetails={this.props.resetActivities}
        />
      </Grid>
    );
  }
}
