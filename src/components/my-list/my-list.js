import SkeletonInList from "../serviceComponent/skeleton";
import React, { Component } from "react";
import { Button, Card, Chip, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./my-list.scss";

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
    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    this.props.activitiesInList(activityKeys);
    this.props.switchSpinner(true);
  }

  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activity, classes, loading } = this.props;
    const skeleton = activity.map(function (item) {
      return (
        <Grid item key={item.key}>
          <SkeletonInList item key={item.key} />
        </Grid>
      );
    });
    const skeletonInList = loading ? (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {skeleton}
      </Grid>
    ) : null;

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

    return (
      <>
        {skeletonInList}
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

export default withStyles(styles, { withTheme: true })(MyList);
