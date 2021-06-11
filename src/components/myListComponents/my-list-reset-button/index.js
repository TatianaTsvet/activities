import MyListResetButton from "./my-list-reset-button";
import { resetActivities } from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
    skeletonLoading: state.serviceReducers.skeletonLoading,
  };
};

export default connect(mapStateToProps, {
  resetActivities,
})(MyListResetButton);
