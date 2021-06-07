import React, { Component } from "react";
import SkeletonInList from "../serviceComponent/skeleton";
import { Button, Card, Chip, Typography } from "@material-ui/core";
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
        //entry.target.onload = () => {
        this.props.setIsVisible(entry.isIntersecting);
        //};
      }
    });
  };
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  componentDidMount() {
    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    this.props.activitiesInList(activityKeys);
    this.props.switchSpinner(true);

    if (this.rootRef.current) this.observer.observe(this.rootRef.current);
  }
  componentDidUpdate() {
    //if (this.rootRef.current) this.observer.observe(this.rootRef.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };
  changeIndex = () => {
    this.props.changeIndex(this.props.index + 5);
  };

  render() {
    const { activity, activitiesInMyList, classes, loading, isVisible, index } =
      this.props;

    if (activity.length === 0) {
      return (
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
      );
    }

    let posts = activitiesInMyList.map((item, index) => {
      return loading ? (
        <SkeletonInList item key={item.key} />
      ) : (
        <div key={item.key} id={index} ref={this.rootRef}>
          {isVisible ? (
            <Card component="nav" className={classes.card} key={item.type}>
              <Chip
                color="primary"
                label={item.type}
                className={classes.chip}
              />
              <Typography
                variant="h6"
                key={item.activity}
                className={classes.activity}
              >
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
          ) : (
            <SkeletonInList />
          )}
        </div>
      );
    });

    return (
      // <div ref={this.rootRef}>
      //   {posts.map((item) =>
      //     this.props.isVisible ? item : <SkeletonInList />
      //   )}
      // </div>
      <div>{posts}</div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyList);
