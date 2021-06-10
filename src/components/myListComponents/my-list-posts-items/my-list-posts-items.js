import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import SkeletonInList from "../../serviceComponent/skeleton";
import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./my-list-posts-items.scss";

class MyListPostsItems extends Component {
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activitiesInMyList, classes } = this.props;

    let posts = activitiesInMyList.map((item) => {
      return (
        <InView threshold={0} triggerOnce key={item.key}>
          {({ ref, inView }) => (
            <div ref={ref} id={item.type}>
              {inView ? (
                <Card component="nav" className={classes.myListCard}>
                  <Chip
                    color="primary"
                    label={item.type}
                    className={classes.myListChip}
                  />
                  <Typography variant="h6" className={classes.myListActivity}>
                    {item.activity}
                  </Typography>
                  <Typography className={classes.myListActivity}>
                    {item.participants} participants
                  </Typography>
                  <Button
                    className={classes.myListDoneButton}
                    variant="contained"
                    color="primary"
                    onClick={() => this.deleteItem(item.key)}
                  >
                    Done
                  </Button>
                </Card>
              ) : (
                <SkeletonInList />
              )}
            </div>
          )}
        </InView>
      );
    });

    return <div>{posts}</div>;
  }
}

export default withStyles(styles, { withTheme: true })(MyListPostsItems);
