import React, { Component } from "react";
import ActivitiesResultPaper from "../activities-result-paper";
import ResetButton from "../../../core/components/reset-button";
import { Container, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import "./activities-result-item.scss";

class ActivitiesResultItem extends Component {
  sendToMyList = () => {
    const { randomActivity, activity } = this.props;
    this.props.addItemToMyList(randomActivity);
    this.props.showSuccess(true);
    const repeatedActivity = activity.find(
      (item) => item.key === randomActivity.key
    );
    if (repeatedActivity) {
      this.props.saveAgainActivity(true);
      this.props.showSuccess(false);
    }
  };
  resetErrorActivity = () => {
    this.props.resetErrorActivity();
  };
  render() {
    const { randomActivity, error, classes } = this.props;

    const errorActivity = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.resultError}>
          {error}
        </Grid>
        <Grid item>
          <ResetButton
            name="error"
            resetDetails={this.resetErrorActivity}
            className={classes.buttonResetError}
          />
        </Grid>
      </Grid>
    );

    const showComponent = !error && randomActivity;

    return error
      ? errorActivity
      : showComponent && (
          <>
            <Container>
              <ActivitiesResultPaper />
              <Button
                className={classes.activitiesResultButton}
                variant="contained"
                color="secondary"
                onClick={this.sendToMyList}
                size="medium"
              >
                Save for you later
              </Button>
            </Container>
          </>
        );
  }
}

export default withStyles(styles, { withTheme: true })(ActivitiesResultItem);
