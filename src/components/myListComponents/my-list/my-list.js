import React, { Component } from "react";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";
import MyListResetButton from "../my-list-reset-button";
import { BackToTop, StyledProvider } from "components-extra";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import "./my-list.scss";

class MyList extends Component {
  componentDidMount() {
    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    this.props.activitiesInList(activityKeys);
    this.props.switchSkelet(true);
    this.props.closeToast(false);
  }
  resetActivities = () => {
    this.props.resetActivities();
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyListPosts />
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
