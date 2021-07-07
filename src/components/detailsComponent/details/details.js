import React, { Component } from "react";
import DetailsType from "../details-type";
import DetailsParticipants from "../details-participants";
import DetailsBudget from "../details-budget";
import DetailsAccessability from "../details-accessability";
import ActivityService from "../../../services/activityService";
import Spinner from "../../../core/components/spinner";
import { Button, Grid, Typography, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import "./details.scss";

class Details extends Component {
  componentDidMount() {
    this.props.switchSpinner(false);
  }

  ActivityService = new ActivityService();

  sendForm = async (event) => {
    event.preventDefault();
    this.props.switchSpinner(true);
    const { details } = this.props;
    const randomActivity = await this.ActivityService.getActivity(details);
    this.props.activityFetched(randomActivity);
    if (!randomActivity.error) {
      this.props.changeError(false);
    }
  };

  resetDetails = () => {
    const { details } = this.props;
    this.props.resetDetails(details);
  };
  render() {
    const { loading, classes } = this.props;
    return (
      <>
        <FormControl fullWidth={true}>
          <Typography variant="h5" gutterBottom>
            Activity details
          </Typography>
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
          {loading ? (
            <Grid container item direction="column" alignItems="center">
              <Spinner />
            </Grid>
          ) : (
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Button
                onClick={this.sendForm}
                type="submit"
                variant="contained"
                color="primary"
              >
                Hit me with the new one
              </Button>
            </Grid>
          )}
        </FormControl>
        {loading ? null : (
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.buttonReset}
            onClick={this.resetDetails}
          >
            Reset all
          </Button>
        )}
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Details);
