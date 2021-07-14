import React, { Component } from "react";
import DetailsType from "../details-type";
import DetailsParticipants from "../details-participants";
import DetailsBudget from "../details-budget";
import DetailsAccessability from "../details-accessability";
import ResetButton from "../../../../core/components/reset-button";
import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class DetailsFilterGroup extends Component {
  resetDetails = () => {
    const { details } = this.props;
    this.props.resetDetails(details);
  };
  render() {
    const { loading, classes } = this.props;
    return (
      <div className="filters">
        <Grid item xs={12}>
          <DetailsType />
        </Grid>
        <Grid item xs={12}>
          <DetailsParticipants />
        </Grid>
        <Grid item xs={12}>
          <DetailsBudget />
        </Grid>
        <Grid item xs={12}>
          <DetailsAccessability />
        </Grid>
        <Grid container>
          {loading ? null : (
            <ResetButton
              name="details"
              resetDetails={this.resetDetails}
              className={classes.buttonReset}
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailsFilterGroup);
