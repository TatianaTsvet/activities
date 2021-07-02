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
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };
  dragStart = (e, index) => {
    console.log(index);
  };
  dragLeave = (e) => {
    e.target.style.background = "white";
  };
  dragEnd = (e) => {};
  dragOver = (e) => {
    e.preventDefault();
    e.target.style.background = "green";
  };
  dragDrop = (e, index) => {
    e.preventDefault();
    

    })
    console.log(index);
    
  };
  render() {
    const { classes, skeletonLoading, activity } = this.props;
    if (activity.length === 0) {
      return <MyListNoPosts />;
    }
    const posts = activity.map((key, index) => {
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
            <div
              draggable={true}
              onDragStart={(e) => this.dragStart(e, index)}
              onDragLeave={(e) => this.dragLeave(e)}
              onDragEnd={(e) => this.dragEnd(e)}
              onDragOver={(e) => this.dragOver(e)}
              onDrop={(e) => this.dragDrop(e, index)}
            >
              <MyListPosts activityKey={key} index={index} />
            </div>
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
