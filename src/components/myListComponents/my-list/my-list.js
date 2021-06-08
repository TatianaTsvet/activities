import React, { Component } from "react";
import SkeletonInList from "../../serviceComponent/skeleton";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./my-list.scss";

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
    //console.log(this.rootRef);

    //if (this.rootRef.current) this.observer.observe(this.rootRef.current);
  }
  componentDidUpdate() {
    if (this.rootRef.current) this.observer.observe(this.rootRef.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  
  render() {
    //const { activity, classes, loading, isVisible, } = this.props;

    return (
      // <div ref={this.rootRef}>
      //   {posts.map((item) =>
      //     this.props.isVisible ? item : <SkeletonInList />
      //   )}
      // </div>
      <div ref={this.rootRef}>
        <MyListPosts />
        <MyListNoPosts />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyList);
