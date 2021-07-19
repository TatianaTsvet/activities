import React, { Component } from "react";
import MyListPosts from "../my-list-posts";
import MyListNoPosts from "../my-list-no-posts";
import MyListResetButton from "../my-list-reset-button";
import { BackToTop, StyledProvider } from "components-extra";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import SkeletonInList from "../../../core/components/skeleton";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Chip } from "@material-ui/core";
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

  dragDrop = (result) => {
    const { activity } = this.props;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const startDropIndex = activity[startIndex].order;
    const endDropIndex = activity[endIndex].order;

    this.changeOrder(startDropIndex, endDropIndex);
  };
  inViewChange = (key) => {
    const { activitiesInMyList } = this.props;
    const repeatedKey = activitiesInMyList.find((item) => item.key === key);
    if (!repeatedKey) {
      this.props.activitiesInList(key);
    }
  };
  render() {
    const { classes, skeletonLoading, activity } = this.props;

    if (activity.length === 0) {
      return <MyListNoPosts />;
    }
    const dragChip = (
      <Chip className={classes.dragChip} label="Pull activity">
        drag me
      </Chip>
    );

    const posts = (
      <DragDropContext onDragEnd={this.dragDrop}>
        <Droppable droppableId="dragCards">
          {(provided) => (
            <div ref={provided.innerRef}>
              {activity.map((item, index) => {
                return (
                  <InView
                    key={item.key}
                    triggerOnce
                    onChange={(InView) => {
                      if (InView) {
                        this.inViewChange(item.key);
                      }
                    }}
                  >
                    {skeletonLoading ? (
                      <SkeletonInList />
                    ) : (
                      <Draggable draggableId={item.key} index={index}>
                        {(provided) => (
                          <div
                            className="myListPostContainer"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <MyListPosts
                              activityKey={item.key}
                              order={item.order}
                              index={index}
                              dragChip={
                                <div {...provided.dragHandleProps}>
                                  {dragChip}
                                </div>
                              }
                              changeOrderByArrowUp={this.changeOrderByArrowUp}
                              changeOrderByArrowDown={
                                this.changeOrderByArrowDown
                              }
                              progress={item.progress}
                            />
                          </div>
                        )}
                      </Draggable>
                    )}
                  </InView>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );

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
