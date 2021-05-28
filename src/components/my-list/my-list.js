import Spinner from "../serviceComponent/spinner";
import React, { Component } from "react";
import { Button, Card, Chip, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./my-list.scss";
import {
  deleteActivityItem,
  activitiesInList,
  switchSpinner,
} from "../../saga/actions";

const styles = (theme) => ({
  card: {
    marginBottom: "1em",
    padding: "1em",
  },
  activity: {
    paddingTop: "1em",
  },
  emptyActivity: {
    padding: "1em 0 0 1em",
  },
  emptyActivityButton: {
    padding: "1em",
    margin: "1em",
  },
  chip: {
    background: "#2e7d32",
  },
  doneButton: {
    marginTop: "1em",
  },
  link: {
    textDecoration: "none",
  },
});

class MyList extends Component {
  componentDidMount() {
    const storageKey = "somekey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    this.props.activitiesInList(activityKeys);
    this.props.switchSpinner(true);
  }

  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activity, classes, loading } = this.props;

    const posts = activity.map((item) => {
      if (!item.activity) {
      }
      return (
        <div key={item.key}>
          <Card component="nav" className={classes.card}>
            <Chip color="primary" label={item.type} className={classes.chip} />
            <Typography variant="h6" className={classes.activity}>
              {item.activity}
            </Typography>
            <Typography className={classes.activity}>
              {item.participants} participants
            </Typography>
            <Button
              className={classes.doneButton}
              variant="contained"
              color="primary"
              onClick={() => this.deleteItem(item.key)}
            >
              Done
            </Button>
          </Card>
        </div>
      );
    });

    return loading ? (
      <Grid container direction="row" justify="space-around">
        <Spinner />
      </Grid>
    ) : (
      <>
        {activity.length === 0 ? (
          <Card className={classes.card} key="noActivity">
            <Typography variant="h6" className={classes.emptyActivity}>
              You have nothing saved yet
            </Typography>

            <Link to="/activities" className={classes.link}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.emptyActivityButton}
              >
                Go back to "Activities"!
              </Button>
            </Link>
          </Card>
        ) : (
          posts
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.serviceReducers.loading,
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  deleteActivityItem,
  activitiesInList,
  switchSpinner,
})(withStyles(styles, { withTheme: true })(MyList));
