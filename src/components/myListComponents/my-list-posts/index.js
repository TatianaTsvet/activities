import MyListPosts from "./my-list-posts";
import {
  activitiesInList,
  deleteActivityItem,
  changeActivityProgress,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activitiesInMyList: state.mainReducers.activitiesInMyList,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
  changeActivityProgress,
  deleteActivityItem,
})(MyListPosts);
