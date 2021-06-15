import React, { Component } from "react";
import MyListPostsItems from "../my-list-posts-items";
import SkeletonInList from "../../../core/components/skeleton";

import "./my-list-posts.scss";

class MyListPosts extends Component {
  render() {
    const { skeletonLoading, activity } = this.props;

    // const skeleton = activity.map((item) => {
    //   return <SkeletonInList item key={`skeleton${item}`} />;
    // });

    return skeletonLoading ? (
      <>
        {activity.map((item) => {
          return <SkeletonInList item key={`skeleton${item}`} />;
        })}
      </>
    ) : (
      <div>
        <MyListPostsItems />
      </div>
    );
  }
}

export default MyListPosts;
