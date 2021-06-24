import React, { Component } from "react";
import ActivitiesResultPaper from "../activities-result-paper";
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
      (item) => item === randomActivity.key
    );
    if (repeatedActivity) {
      this.props.saveAgainActivity(true);
      this.props.showSuccess(false);
    }
  };

  render() {
    const { randomActivity, error, classes, loading } = this.props;

    const errorActivity = (
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.resultError}
      >
        {error}
      </Grid>
    );
    const loadingActivity = loading ? null : (
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
    );
    const showComponent = !error && randomActivity;

    return error ? { errorActivity } : showComponent && loadingActivity;
  }
}

export default withStyles(styles, { withTheme: true })(ActivitiesResultItem);
