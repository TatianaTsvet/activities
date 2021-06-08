import MyListPosts from "./my-list-posts";
import {
  deleteActivityItem,
  activitiesInList,
  switchSpinner,
  setIsVisible,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loading: state.serviceReducers.loading,
    activity: state.mainReducers.activity,
    isVisible: state.serviceReducers.isVisible,
    activitiesInMyList: state.mainReducers.activitiesInMyList,
    index: state.serviceReducers.index,
  };
};

export default connect(mapStateToProps, {
  deleteActivityItem,
  activitiesInList,
  switchSpinner,
  setIsVisible,
})(MyListPosts);
