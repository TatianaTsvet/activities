import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import styles from "./styles";
import SkeletonInList from "../../../core/components/skeleton";

import "./my-list-posts.scss";

class MyListPosts extends Component {
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };
  // dragStart = (e, index) => {
  //   console.log(index);
  // };
  // dragLeave = (e) => {
  //   e.target.style.background = "white";
  // };
  // dragEnd = (e) => {};
  // dragOver = (e) => {
  //   e.preventDefault();
  //   e.target.style.background = "green";
  // };
  // dragDrop = (e, index) => {
  //   e.preventDefault();
  //   console.log(index);
  // };
  render() {
    const { activityKey, classes, activitiesInMyList, index } = this.props;

    const activity = activitiesInMyList.find(({ key }) => key === activityKey);

    if (!activity) {
      return <SkeletonInList />;
    }

    return (
      <div
        className="myListPostItem"
        // draggable={true}
        // onDragStart={(e) => this.dragStart(e, index)}
        // onDragLeave={(e) => this.dragLeave(e)}
        // onDragEnd={(e) => this.dragEnd(e)}
        // onDragOver={(e) => this.dragOver(e)}
        // onDrop={(e) => this.dragDrop(e, index)}
      >
        <Card component="nav" className={classes.myListCard}>
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
          <Button
            className={classes.myListDoneButton}
            variant="contained"
            color="primary"
            onClick={() => this.deleteItem(activity.key)}
          >
            Done
          </Button>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
