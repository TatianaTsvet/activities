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
  constructor(props) {
    super(props);
    this.state = { card1: "", card2: "" };
  }
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
    this.setState({ card1: index });
  };
  dragLeave = (e) => {
    e.target.style.background = "white";
  };

  dragOver = (e) => {
    e.preventDefault();
    if (
      //e.target.className === "myListPostsItem"
      e.target.classList.contains("MyListPosts-myListCard-33")
      // ||      e.target.classList.contains("MyListPosts-myListActivity-34")
    ) {
      e.target.style.background = "green";
    }
    //e.target.style.background = "lightBlue";
  };
  dragDrop = (e, index) => {
    e.preventDefault();
    this.setState({ card2: index });
    const { activity } = this.props;
    const { card1 } = this.state;

    [activity[card1], activity[index]] = [activity[index], activity[card1]];

    // const newActivity = activity.map((item, index) => {
    //   if (item[index] === card1) {
    //     return {}
    //   }
    // })
    e.target.style.background = "white";
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
              className="myListPostContainer"
              draggable={true}
              onDragStart={(e) => this.dragStart(e, index)}
              onDragLeave={(e) => this.dragLeave(e)}
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
