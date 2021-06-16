import MyListPosts from "./my-list-posts";
import {
  activitiesInList,
  switchSpinner,
  deleteActivityItem,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    skeletonLoading: state.serviceReducers.skeletonLoading,
    activitiesInMyList: state.mainReducers.activitiesInMyList,
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
  deleteActivityItem,
  switchSpinner,
})(MyListPosts);
