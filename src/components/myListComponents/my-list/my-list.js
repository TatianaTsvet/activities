import React, { Component } from "react";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";

import "./my-list.scss";

export default class MyList extends Component {
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
