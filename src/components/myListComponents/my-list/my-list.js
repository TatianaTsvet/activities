import React, { Component } from "react";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";
import MyListResetButton from "../my-list-reset-button";
import { BackToTop, StyledProvider } from "components-extra";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import SkeletonInList from "../../../core/components/skeleton";
import InView from "react-intersection-observer";
import "./my-list.scss";

class MyList extends Component {
  componentDidMount() {
    //this.props.switchSkelet(true);
    this.props.closeToast(false);
  }
  resetActivities = () => {
    this.props.resetActivities();
  };
  viewStateChange = (key, InView) => {
    console.log(InView);
    if (InView) {
      this.props.activitiesInList(key);
    }
  };
  render() {
    const { classes, skeletonLoading } = this.props;

    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");

    const posts = activityKeys.map((key, index) => {
      return (
        <InView
          //threshold={1}
          // triggerOnce
          rootMargin={"200%"}
          onChange={(InView, entry) => {
            if (InView) {
              this.props.activitiesInList(key);
            }
          }}
        >
          {InView ? (
            <MyListPosts key={key} activityKey={key} index={index} />
          ) : null}
        </InView>
      );
    });

    return (
      <div>
        {posts}
        <MyListResetButton />
        <MyListNoPosts />
        <StyledProvider>
          <BackToTop className={classes.backToTop} />
        </StyledProvider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyList);
