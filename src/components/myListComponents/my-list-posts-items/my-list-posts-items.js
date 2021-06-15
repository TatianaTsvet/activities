import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import SkeletonInList from "../../../core/components/skeleton";
import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import "./my-list-posts-items.scss";

class MyListPostsItems extends Component {
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  callbackFunction = (entries) => {
    const [entry] = entries;
    this.props.postIsVisible(entry.isIntersecting);
  };
  componentDidMount() {
    const observer = new IntersectionObserver(
      this.callbackFunction,
      this.options
    );
    this.rootRef.map((item) => {
      if (this.rootRef) {
        return observer.observe(item);
      } else {
        return null;
      }
    });
  }
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activitiesInMyList, classes, isVisible } = this.props;
    this.rootRef = [];

    let posts = activitiesInMyList.map((item) => {
      return (
        // <InView threshold={0} triggerOnce key={item.key}>
        //   {({ ref, inView }) => (
        <div>
          {isVisible ? (
            <Card
              ref={(ref) => {
                this.rootRef.push(ref);
              }}
              component="nav"
              className={classes.myListCard}
            >
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
        //   )}
        // </InView>
      );
    });

    return <div>{posts}</div>;
  }
}

export default withStyles(styles, { withTheme: true })(MyListPostsItems);
