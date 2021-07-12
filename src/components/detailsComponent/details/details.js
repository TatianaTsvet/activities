import React, { Component } from "react";

import DetailsFilterGroup from "../details-filter-group";
import DetailsMobileDrawer from "../details-mobile-drawer";
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
  openDrawer = () => {
    this.props.openDrawer(true);
  };

  render() {
    const { loading, error, randomActivity, classes } = this.props;

    return (
      <>
        <Typography variant="h5" gutterBottom>
          Activity details
        </Typography>
        <FormControl fullWidth={true} className={classes.formSM}>
          <DetailsFilterGroup />
        </FormControl>
        {loading ? (
          <Grid container item direction="column" alignItems="center">
            <Spinner />
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
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
            <Button
              className={classes.buttonSM}
              onClick={this.openDrawer}
              variant="contained"
              color="warning"
            >
              Show filters
            </Button>

            {error || randomActivity.activity ? (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.buttonMobileReset}
                onClick={this.resetDetails}
              >
                Reset all
              </Button>
            ) : null}
          </Grid>
        )}
        <DetailsMobileDrawer />
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Details);
