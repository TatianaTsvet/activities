import React, { Component } from "react";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";
import MyListResetButton from "../my-list-reset-button";
import { BackToTop, StyledProvider } from "components-extra";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import "./my-list.scss";
import SkeletonInList from "../../../core/components/skeleton";

class MyList extends Component {
  componentDidMount() {
    //this.props.switchSkelet(true);
    this.props.closeToast(false);
  }
  resetActivities = () => {
    this.props.resetActivities();
  };
  render() {
    const { classes } = this.props;

    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    const posts = activityKeys.map((key, index) => {
      return <MyListPosts key={key} activityKey={key} index={index} />;
    });

    return (
      <div>
        {/* {activityKeys.map((key, index) => {
          return <MyListPosts key={key} activityKey={key} index={index} />;
        })}  */}
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
