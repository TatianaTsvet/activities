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
    this.props.closeToast(false);
  }

  resetActivities = () => {
    this.props.resetActivities();
  };

  render() {
    const { classes, skeletonLoading } = this.props;

    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");

    const posts = activityKeys.map((key) => {
      return (
        <InView
          key={key}
          triggerOnce
          onChange={(InView) => {
            if (InView) {
              this.props.activitiesInList(key);
            }
          }}
        >
          {skeletonLoading ? (
            <SkeletonInList />
          ) : (
            <MyListPosts activityKey={key} />
          )}
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
