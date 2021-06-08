import React, { Component } from "react";
import { Container, Paper, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles";

import "./activities-result.scss";

class ActivitiesResult extends Component {
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
    const { randomActivity, error, classes } = this.props;

    const showComponent = !error && randomActivity;
    const activityComponent = randomActivity ? (
      <Paper className="result_window">{randomActivity.activity}</Paper>
    ) : (
      <Paper className="result_window invitation">Choose any activity</Paper>
    );

    return (
      showComponent && (
        <>
          <Container>
            <Typography variant="h5" gutterBottom>
              You should
            </Typography>
            {error ? (
              <Paper className="result_window error">{error}</Paper>
            ) : (
              activityComponent
            )}
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
      )
    );
  }
}

export default withStyles(styles, { withTheme: true })(ActivitiesResult);
