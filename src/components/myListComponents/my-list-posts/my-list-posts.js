import { Button, Card, Chip, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import styles from "./styles";
import SkeletonInList from "../../../core/components/skeleton";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import "./my-list-posts.scss";

class MyListPosts extends Component {
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activityKey, classes, activitiesInMyList, index, activity } =
      this.props;

    const activityInList = activitiesInMyList.find(
      ({ key }) => key === activityKey
    );

    if (!activityInList) {
      return <SkeletonInList />;
    }
    const upArrow =
      index === 0 ? null : (
        <ArrowUpwardRoundedIcon
          fontSize={"large"}
          onClick={() => this.props.changeOrderByArrowUp(index)}
        />
      );
    const downArrow =
      index === activity.length - 1 ? null : (
        <ArrowDownwardRoundedIcon
          fontSize={"large"}
          onClick={() => this.props.changeOrderByArrowDown(index)}
        />
      );
    return (
      <div className="myListPostItem">
        <Card component="nav" className={classes.myListCard}>
          <Chip
            color="primary"
            label={activityInList.type}
            className={classes.myListChip}
          />
          <Typography variant="h6" className={classes.myListActivity}>
            {activityInList.activity}
          </Typography>
          <Typography className={classes.myListActivity}>
            {activityInList.participants} participants
          </Typography>
          {upArrow}
          <Button
            className={classes.myListDoneButton}
            variant="contained"
            color="primary"
            onClick={() => this.deleteItem(activityInList.key)}
          >
            Done
          </Button>
          {downArrow}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
