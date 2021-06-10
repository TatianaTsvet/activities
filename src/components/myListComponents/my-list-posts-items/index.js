import MyListPostsItems from "./my-list-posts-items";
import { deleteActivityItem } from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activitiesInMyList: state.mainReducers.activitiesInMyList,
  };
};

export default connect(mapStateToProps, {
  deleteActivityItem,
})(MyListPostsItems);
