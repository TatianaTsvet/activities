import MyListPosts from "./my-list-posts";
import { activitiesInList, deleteActivityItem } from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activitiesInMyList: state.mainReducers.activitiesInMyList,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
  deleteActivityItem,
})(MyListPosts);
