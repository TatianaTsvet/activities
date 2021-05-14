import React, { Component } from "react";
import { Container, Paper, Button } from "@material-ui/core";

import "./activities-result.scss";

export default class ActivitiesResult extends Component {
  sendToMyList = () => {
    const { randomActivity } = this.props;
    this.props.addItem(randomActivity);
    this.props.setShow(true);
  };

  render() {
    const { randomActivity, error } = this.props;
    const showButton = !error && randomActivity;
    const activityComponent = randomActivity ? (
      <Paper className="result_window">{randomActivity.activity}</Paper>
    ) : (
      <Paper className="result_window invitation">Choose any activity</Paper>
    );

    return (
      <>
        <Container>
          <h5 className="text-white">You should</h5>
          {error ? (
            <Paper className="result_window error">{error}</Paper>
          ) : (
            activityComponent
          )}

          {showButton && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.sendToMyList}
            >
              Save for you later
            </Button>
          )}
        </Container>
      </>
    );
  }
}
