import {
  Button,
  Card,
  Chip,
  Typography,
  Slider,
  Grid,
  Tooltip,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import styles from "./styles";
import SkeletonInList from "../../../core/components/skeleton";

import "./my-list-posts.scss";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 25,
    label: "25%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 75,
    label: "75%",
  },
  {
    value: 100,
    label: "100%",
  },
];

class MyListPosts extends Component {
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };
  onChange = (event, newValue) => {
    this.props.changeActivityProgress(this.props.activityKey, newValue);
  };
  render() {
    const { activityKey, classes, activitiesInMyList, progress } = this.props;

    const activity = activitiesInMyList.find(({ key }) => key === activityKey);

    if (!activity) {
      return <SkeletonInList />;
    }

    return (

      <Card component="nav" className={classes.myListCard}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item sm={8} xs={12}>
            <Grid item>
              <Chip
                color="primary"
                label={activity.type}
                className={classes.myListChip}
              />
              <Typography variant="h6" className={classes.myListActivity}>
                {activity.activity}
              </Typography>
              <Typography className={classes.myListActivity}>
                {activity.participants} participants
              </Typography>
            </Grid>
            <Grid
              container
              item
              sm={8}
              xs={12}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography
                component="h2"
                gutterBottom
                className={classes.success}
              >
                Choose your success
              </Typography>
              <Slider
                onChange={this.onChange}
                className={classes.slider}
                defaultValue={0}
                aria-labelledby="discrete-slider-always"
                step={25}
                value={progress}
                marks={marks}
                // valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>
          <Grid>
            <Tooltip
              interactive
              className={classes.tooltip}
              placement="top"
              title={
                progress === 100
                  ? "You may delete your activity"
                  : "Do your activity completely"
              }
            >
              <span>
                <Button
                  disabled={progress === 100 ? false : true}
                  className={classes.myListDoneButton}
                  variant="contained"
                  color="primary"
                  onClick={() => this.deleteItem(activity.key)}
                >
                  Done
                </Button>
              </span>
            </Tooltip>
          </Grid>
        </Grid>
      </Card>

    );
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
