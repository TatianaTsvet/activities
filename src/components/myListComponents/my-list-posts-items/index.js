import MyListPostsItems from "./my-list-posts-items";
import { deleteActivityItem, postIsVisible } from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activitiesInMyList: state.mainReducers.activitiesInMyList,
    isVisible: state.serviceReducers.isVisible,
  };
};

export default connect(mapStateToProps, { postIsVisible, deleteActivityItem })(
  MyListPostsItems
);
