import React, { Component } from "react";
import SkeletonInList from "../../../core/components/skeleton";
import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import "./my-list-posts-items.scss";
import { InView } from "react-intersection-observer";

class MyListPostsItems extends Component {
  rootRef = React.createRef();
  callbackFunction = (entries) => {
    entries.forEach((entry) => {
      //console.log("entry", entry);
      if (entry.isIntersecting) {
        this.props.postIsVisible(entry.isIntersecting);
      }
    });
  };
  options = {
    root: document.querySelector(".posts"),
    rootMargin: "0px",
    threshold: 1,
  };
  componentDidMount() {
    //   console.log(this.rootRef);
    const observer = new IntersectionObserver(
      this.callbackFunction,
      this.options
    );
    // console.log(observer);
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

    let posts = activitiesInMyList.map((item, index) => {
      return (
        // <InView threshold={0} key={item.key}>
        //   {({ ref, inView }) => (
        <div key={item.key} className="posts">
          {/* {isVisible ? ( */}
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
          {/* ) : (
                <SkeletonInList />
              )} */}
        </div>
      );
      //}
      // </InView>
      //);
    });
    // console.log(posts);
    // console.log(this.rootRef);

    return <div>{posts}</div>;
  }
}

export default withStyles(styles, { withTheme: true })(MyListPostsItems);
