import React, { Component } from "react";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./my-list.scss";

class MyList extends Component {
  componentDidMount() {
    const storageKey = "activityKey";
    const activityKeys = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    this.props.activitiesInList(activityKeys);
    this.props.switchSpinner(true);
  }

  render() {
    return (
      <div>
        <MyListPosts />
        <MyListNoPosts />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyList);
