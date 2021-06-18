import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import styles from "./styles";
import SkeletonInList from "../../../core/components/skeleton";

import "./my-list-posts.scss";

class MyListPosts extends Component {
  componentDidMount() {
    //this.props.switchSkelet(true);
  }
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };
  viewStateChange = (InView, entry) => {
    if (InView) {
      this.props.activitiesInList(this.props.activityKey);
    }
  };
  render() {
    const {
      activityKey,
      classes,
      index,
      activitiesInMyList,
      visible,
      skeletonLoading,
      isVisible,
      entry,
    } = this.props;

    const activity = activitiesInMyList[index] ?? activitiesInMyList;

    //this.props.activitiesInList(this.props.activityKey);
    console.log(visible);
    return (
      // <InView
      // trackVisibility={true}
      // delay={100}
      // triggerOnce
      // threshold={0}
      // rootMargin={"-20px 0px -20%"}
      //   onChange={this.viewStateChange}
      // >
      <div>
        <Card component="nav" className={classes.myListCard}>
          <>
            <Chip
              color="primary"
              label={activity.type}
              className={classes.myListChip}
            />
            <Typography
              variant="h6"
              key={activityKey}
              className={classes.myListActivity}
            >
              {activity.activity}
            </Typography>
            <Typography className={classes.myListActivity}>
              {activity.participants} participants
            </Typography>
            <Button
              className={classes.myListDoneButton}
              variant="contained"
              color="primary"
              onClick={() => this.deleteItem(activity.key)}
            >
              Done
            </Button>
          </>
        </Card>
      </div>
      // </InView>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
