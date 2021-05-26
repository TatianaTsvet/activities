import React, { Component } from "react";
import DetailsType from "../details-type";
import DetailsParticipants from "../details-participants";
import DetailsBudget from "../details-budget";
import DetailsAccessability from "../details-accessability";
import ActivityService from "../../services/activityService";
import Spinner from "../spinner";
import { Button, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import "./details.scss";
import { activityFetched, switchSpinner, changeError } from "../../actions";

const styles = (theme) => ({
  root: {
    padding: "0 1.5em",
  },
});

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
  render() {
    const { loading, classes } = this.props;
    return (
      <form className={classes.root} onSubmit={this.sendForm}>
        <Typography variant="h5" gutterBottom>
          Activity details
        </Typography>
        <Grid item>
          <DetailsType />
        </Grid>
        <Grid item>
          <DetailsParticipants />
        </Grid>
        <Grid item>
          <DetailsBudget />
        </Grid>
        <Grid item>
          <DetailsAccessability />
        </Grid>
        {loading ? (
          <Grid container direction="column" alignItems="center">
            <Spinner />
          </Grid>
        ) : (
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Button type="submit" variant="contained" color="primary">
              Hit me with the new one
            </Button>
          </Grid>
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  activityFetched,
  changeError,
  switchSpinner,
})(withStyles(styles, { withTheme: true })(Details));
