import MyListPosts from "./my-list-posts";
import { activitiesInList, switchSpinner } from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    skeletonLoading: state.serviceReducers.skeletonLoading,
    activitiesInMyList: state.mainReducers.activitiesInMyList,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
  switchSpinner,
})(MyListPosts);
