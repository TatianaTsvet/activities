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

const styles = (theme) => ({
  root: {
    padding: "0 1.5em",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
});

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      participants: 1,
      minprice: 0,
      maxprice: 1,
      accessability: 0,
    };
  }

  ActivityService = new ActivityService();

  onUpdateBudget = (minprice, maxprice) => {
    this.setState({ minprice, maxprice });
  };
  onChangeParticipants = (participants) => {
    this.setState({ participants });
  };
  onChangeType = (type) => {
    this.setState({ type });
  };
  onUpdateAccessability = (accessability) => {
    this.setState({ accessability });
  };

  sendForm = async (event) => {
    event.preventDefault();
    this.props.switchSpinner(true);
    let activity = { ...this.state };
    activity = await this.ActivityService.getActivity(activity);
    this.props.onActivityFetched(activity);

    if (!activity.error) {
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
          <DetailsType onChangeType={this.onChangeType} />
        </Grid>
        <Grid item>
          <DetailsParticipants
            onChangeParticipants={this.onChangeParticipants}
          />
        </Grid>
        <Grid item>
          <DetailsBudget onUpdateBudget={this.onUpdateBudget} />
        </Grid>
        <Grid item>
          <DetailsAccessability
            onUpdateAccessability={this.onUpdateAccessability}
          />
        </Grid>
        {loading ? (
          <Grid item>
            <Spinner />
          </Grid>
        ) : (
          <>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Hit me with the new one
            </Button>
          </>
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    randomActivity: activity,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Details));
