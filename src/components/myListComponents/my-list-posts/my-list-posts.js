import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Component } from "react";
import { InView } from "react-intersection-observer";
import styles from "./styles";
import SkeletonInList from "../../../core/components/skeleton";

import "./my-list-posts.scss";

class MyListPosts extends Component {
  componentDidMount() {
    this.props.activitiesInList(this.props.activityKey);
  }
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };
  render() {
    const { activityKey, classes, index, activitiesInMyList } = this.props;

    const activity = activitiesInMyList[index] ?? activitiesInMyList;
    console.log(activity);

    return (
      <InView>
        <Card component="nav" className={classes.myListCard}>
          {/* {activity ? ( */}
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
              onClick={() => this.deleteItem(activityKey)}
            >
              Done
            </Button>
          </>
          {/* ) : (
            <SkeletonInList />
          )} */}
        </Card>
      </InView>
    );

    // const skeleton = activity.map((item) => {
    //   return <SkeletonInList item key={`skeleton${item}`} />;
    // });

    //return;
    //skeletonLoading ? (
    //   <>
    //     {activity.map((item) => {
    //       return <SkeletonInList item key={`skeleton${item}`} />;
    //     })}
    //   </>
    // ) : (
    //   <div>
    //     <MyListPostsItems />
    //   </div>
    //);
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
