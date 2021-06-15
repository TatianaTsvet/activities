import React, { Component } from "react";
import MyListPostsItems from "../my-list-posts-items";
import SkeletonInList from "../../../core/components/skeleton";

import "./my-list-posts.scss";

class MyListPosts extends Component {
  render() {
    const { skeletonLoading, activity } = this.props;

    const skeleton = [];
    for (let i = 0; i === activity.length; i++) {
      skeleton.push(<SkeletonInList key={`skeleton${i}`} />);
    }
    // const skeleton = activity.map((item, index) => {
    //   return <SkeletonInList item key={index} />;
    // });

    return skeletonLoading ? (
      <>{skeleton}</>
    ) : (
      <div>
        <MyListPostsItems />
      </div>
    );
  }
}

export default MyListPosts;
