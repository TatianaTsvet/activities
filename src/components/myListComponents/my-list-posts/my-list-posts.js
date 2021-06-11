import React, { Component } from "react";
import MyListPostsItems from "../my-list-posts-items";
import SkeletonInList from "../../../core/components/skeleton";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./my-list-posts.scss";

class MyListPosts extends Component {
  render() {
    const { skeletonLoading, activitiesInMyList } = this.props;

    const skeleton = activitiesInMyList.map((item, index) => {
      return <SkeletonInList item key={index} />;
    });

    return skeletonLoading ? (
      <>{skeleton}</>
    ) : (
      <div>
        <MyListPostsItems />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyListPosts);
