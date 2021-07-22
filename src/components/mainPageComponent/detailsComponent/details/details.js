import React, { Component } from "react";
import DetailsFilterGroup from "../details-filter-group";
import DetailsMobileDrawer from "../details-mobile-drawer";
import ActivityService from "../../../../services/activityService";
import MobileResetButton from "../mobile-reset-button";
import Spinner from "../../../../core/components/spinner";
import { Button, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import "./details.scss";

class Details extends Component {
  componentDidMount() {
    this.props.switchSpinner(false);
  }

  ActivityService = new ActivityService();

  sendForm = async () => {
    this.props.switchSpinner(true);
    const { details } = this.props;
    this.props.getNewActivity(details);
  };
  resetDetails = () => {
    this.props.resetDetails();
  };
  openDrawer = () => {
    this.props.openDrawer(true);
  };

  render() {
    const { loading, classes, error } = this.props;
    const mobileResetButton = error ? <MobileResetButton /> : null;

    return (
      <div className="details">
        <Typography variant="h5" gutterBottom>
          Activity details
        </Typography>
        <div className={classes.formSM}>
          <DetailsFilterGroup />
        </div>
        {loading ? (
          <Grid container item direction="column" alignItems="center">
            <Spinner />
          </Grid>
        ) : (
          <Grid
            item
            spacing={3}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6} sm={12}>
              <Button
                className={classes.getActivityButton}
                onClick={this.sendForm}
                variant="contained"
                color="secondary"
              >
                Hit me with the new one
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                className={classes.buttonSM}
                onClick={this.openDrawer}
                variant="contained"
              >
                Show filters
              </Button>
            </Grid>

            {mobileResetButton}
          </Grid>
        )}

        <DetailsMobileDrawer />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Details);
