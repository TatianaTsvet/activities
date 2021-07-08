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
      (item) => item.key === randomActivity.key
    );
    if (repeatedActivity) {
      this.props.saveAgainActivity(true);
      this.props.showSuccess(false);
    }
  };

  render() {
    const { randomActivity, error, classes } = this.props;

    const errorActivity = (
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
        className={classes.resultError}
      >
        {error}
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
