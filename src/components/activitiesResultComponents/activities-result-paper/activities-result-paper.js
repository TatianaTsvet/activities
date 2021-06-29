import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import "./activities-result-paper.scss";

class ActivitiesResultPaper extends Component {
  render() {
    const { randomActivity, classes } = this.props;

    return (
      <div className="activities_result_paper">
        <Typography variant="h5" gutterBottom>
          You should
        </Typography>
        <Paper className={classes.resultWindow}>
          {randomActivity.activity}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ActivitiesResultPaper);
