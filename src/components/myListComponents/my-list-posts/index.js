import MyListPosts from "./my-list-posts";
import {
  deleteActivityItem,
  changeActivityProgress,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activitiesInMyList: state.mainReducers.activitiesInMyList,
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  changeActivityProgress,
  deleteActivityItem,
})(MyListPosts);
