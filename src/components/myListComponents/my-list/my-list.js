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
    this.state = { card1: "" };
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
  changeOrder = (card1, card2) => {
    const newActivity = this.props.activity.map((item) => {
      if (item.order === card1) {
        return { ...item, order: card2 };
      }
      if (item.order === card2) {
        return { ...item, order: card1 };
      }
      return item;
    });
    return this.props.changeActivityOrder(newActivity);
  };
  changeOrderByArrowUp = (cardIndex) => {
    const changedCard1 = this.props.activity[cardIndex].order;
    const changedCard2 = this.props.activity[cardIndex - 1].order;
    this.changeOrder(changedCard1, changedCard2);
  };
  changeOrderByArrowDown = (cardIndex) => {
    const changedCard1 = this.props.activity[cardIndex].order;
    const changedCard2 = this.props.activity[cardIndex + 1].order;
    this.changeOrder(changedCard1, changedCard2);
  };

  dragStart = (e, index) => {
    this.setState({ card1: index });
  };
  dragLeave = (e) => {
    e.target.style.background = "white";
  };

  dragOver = (e) => {
    e.preventDefault();
    e.target.style.background = "#5DCEC6";
  };
  dragDrop = (e, dropIndex) => {
    e.preventDefault();
    const { card1 } = this.state;
    this.changeOrder(card1, dropIndex);

    e.target.style.background = "white";
  };
  render() {
    const { classes, skeletonLoading, activity } = this.props;
    if (activity.length === 0) {
      return <MyListNoPosts />;
    }

    const posts = activity.map((item, index) => {
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
            <div
              className="myListPostContainer"
              draggable={true}
              onDragStart={(e) => this.dragStart(e, item.order)}
              onDragLeave={(e) => this.dragLeave(e)}
              onDragOver={(e) => this.dragOver(e)}
              onDrop={(e) => this.dragDrop(e, item.order)}
            >
              <MyListPosts
                activityKey={item.key}
                order={item.order}
                index={index}
                changeOrderByArrowUp={this.changeOrderByArrowUp}
                changeOrderByArrowDown={this.changeOrderByArrowDown}
              />
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
