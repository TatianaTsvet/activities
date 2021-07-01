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
    const { classes, skeletonLoading, activity } = this.props;

    if (activity.length === 0) {
      return <MyListNoPosts />;
    }
    const posts = activity.map((item) => {
      return (
        <InView
          key={item.key}
          triggerOnce
          onChange={(InView) => {
            if (InView) {
              this.props.activitiesInList(item.key);
            }
          }}
        >
          {skeletonLoading ? (
            <SkeletonInList />
          ) : (
            <MyListPosts activityKey={item.key} progress={item.progress} />
          )}
        </InView>
      );
    });

    return (
      <div className="my_list">
        {posts}
        <MyListResetButton
          resetActivities={this.resetActivities}
          activity={activity}
          loading={skeletonLoading}
        />

        <StyledProvider>
          <BackToTop className={classes.backToTop} />
        </StyledProvider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyList);
