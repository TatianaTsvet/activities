import MyListPosts from "./my-list-posts";
import {
  activitiesInList,
  switchSkelet,
  deleteActivityItem,
  postIsVisible,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    skeletonLoading: state.serviceReducers.skeletonLoading,
    isVisible: state.serviceReducers.isVisible,
    activitiesInMyList: state.mainReducers.activitiesInMyList,
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
  deleteActivityItem,
  switchSkelet,
  postIsVisible,
})(MyListPosts);
