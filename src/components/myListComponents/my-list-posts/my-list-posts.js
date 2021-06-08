import React, { Component } from "react";
import SkeletonInList from "../../serviceComponent/skeleton";
import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./my-list-posts.scss";

class MyListPosts extends Component {
  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
    this.observer = new IntersectionObserver(
      this.callbackFunction,
      this.options
    );
  }

  callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio) {
        this.props.setIsVisible(entry.isIntersecting);
      }
    });
  };
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  componentDidMount() {
    //if (this.rootRef.current) this.observer.observe(this.rootRef.current);
    console.log(this.rootRef);
  }

  componentDidUpdate() {
    // if (this.rootRef.current) this.observer.observe(this.rootRef.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activitiesInMyList, classes, loading, isVisible } = this.props;
    let posts = activitiesInMyList.map((item, index) => {
      return loading ? (
        <SkeletonInList item key={index} />
      ) : (
        <div key={item.key} id={index} ref={this.rootRef[index]}>
          {isVisible ? (
            <Card
              component="nav"
              className={classes.myListCard}
              key={item.type}
            >
              <Chip
                color="primary"
                label={item.type}
                className={classes.myListChip}
              />
              <Typography
                variant="h6"
                key={item.activity}
                className={classes.myListActivity}
              >
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
      );
    });

    return <div>{posts}</div>;
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
